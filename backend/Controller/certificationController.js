import Certification from "../model/Certification.js";

export const getCertifications = async (req, res) => {
  try {
    const certs = await Certification.find();
    res.json(certs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addCertification = async (req, res) => {
  try {
    const cert = new Certification(req.body);
    await cert.save();
    res.status(201).json(cert);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateCertification = async (req, res) => {
  try {
    const cert = await Certification.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(cert);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteCertification = async (req, res) => {
  try {
    await Certification.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
