const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); //generate authentication tokens
const Admin = require('../model/authModel'); // Assuming the schema file is in models

// Register a new student
exports.register = async (req, res) => {
    const { fname, email, password } = req.body;

    try {
        // Check if the student already exists
        let admin = await Admin.findOne({ email });
        if (admin) {
            return res.status(400).json({ msg: 'Student already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10); //randomness 
        const hashedPassword = await bcrypt.hash(password, salt); //secure before storing

        // Create a new student instance
        admin = new Admin({
            fname,
            email,
            password: hashedPassword,
        });

        // Save the admin to the database
        await admin.save();

        // Respond with the token
        res.json({ admin });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// Login a student
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the student exists
        let admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(400).json({ msg: 'Invalid credentials' });
            
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
           
        }

        // Generate a JWT token
        const token = jwt.sign(
            { adminId: admin._id },
            process.env.JWT_SECRET, // Add a JWT_SECRET to your environment variables
            { expiresIn: '1h' }
        );

        // Respond with the token
        res.json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};
