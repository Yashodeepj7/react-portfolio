
const express = require('express');
const app = express();

const cors = require('cors'); //use when we run frontend and backend on different port
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => {
    console.log("************DB Connection Error:***********")
    console.log(err);
});

app.use(express.json());

const route = require('./route/contactRoute');//importing route.js
const route2 = require('./route/projectRoute');//importing route.js
app.use('/',route2);//using route.js
app.use('/',route);//using route.js
app.use('/images',express.static('Images'));//using Images folder

const route3 = require('./route/authRoute');//importing route.js
app.use('/auth', route3);

app.get(('/'),(req, res) => {
    res.send('connect');
})

app.listen(8000, () => {
    console.log('Server is running on port 8000');
} )