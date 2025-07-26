const model = require('../model/projectModel');

// POST API
const addProject = async (req, res) => {
  const { projectName, projectDisc, githubLink, demoLink } = req.body;
  try {
    const data = await model.create({
      projectName,
      projectDisc,
      githubLink,
      demoLink,
      image: req.file ? req.file.path : null, // ✅ Cloudinary image URL
    });
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error adding project");
  }
};

// GET API
const getProject = async (req, res) => {
  try {
    const projectData = await model.find();
    res.status(200).send(projectData);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching projects");
  }
};

// DELETE API
const deleteProject = async (req, res) => {
  try {
    const deletedata = await model.deleteOne({ _id: req.params._id });
    res.status(200).send(deletedata);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting project");
  }
};

// UPDATE API
const updateProject = async (req, res) => {
  try {
    const updateFields = {
      projectName: req.body.projectName,
      projectDisc: req.body.projectDisc,
      githubLink: req.body.githubLink,
      demoLink: req.body.demoLink,
    };

    if (req.file) {
      updateFields.image = req.file.path; // ✅ Cloudinary image URL if new image uploaded
    }

    const updatedata = await model.updateOne(
      { _id: req.params._id },
      { $set: updateFields }
    );

    res.status(200).send(updatedata);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating project");
  }
};

module.exports = { addProject, getProject, deleteProject, updateProject };
