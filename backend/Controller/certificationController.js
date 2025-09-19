const Certification = require('../model/Certification');

const addCertification = async (req, res) => {
  const { title, provider, issued, credentialUrl } = req.body;
  try {
    const cert = await Certification.create({
      title,
      provider,
      issued,
      credentialUrl,
      imageUrl: req.file ? req.file.path : null, // ✅ Cloudinary URL
    });
    res.status(201).json(cert);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error adding certification");
  }
};

const getCertifications = async (req, res) => {
  try {
    const certs = await Certification.find();
    res.status(200).json(certs);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching certifications");
  }
};

const updateCertification = async (req, res) => {
  try {
    const updateFields = {
      title: req.body.title,
      provider: req.body.provider,
      issued: req.body.issued,
      credentialUrl: req.body.credentialUrl,
    };

    if (req.file) {
      updateFields.imageUrl = req.file.path; // ✅ new Cloudinary URL
    }

    const updated = await Certification.updateOne(
      { _id: req.params._id },
      { $set: updateFields }
    );
    res.status(200).json(updated);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating certification");
  }
};

const deleteCertification = async (req, res) => {
  try {
    await Certification.deleteOne({ _id: req.params._id });
    res.json({ message: "Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting certification");
  }
};

module.exports = {
  addCertification,
  getCertifications,
  updateCertification,
  deleteCertification,
};
