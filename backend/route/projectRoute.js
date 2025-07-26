const express = require('express');

const route = express.Router()

const {addProject,getProject,deleteProject,updateProject} = require('../Controller/projectController')

//multer file
const {photoUpload} = require('../fileUpload')

//POST
// route.post('/registerproject', photoUpload,addProject)//post method to add data
route.post('/registerproject', (req, res) => {
    photoUpload(req, res, function (err) {
      if (err) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({ message: 'Image size should not exceed 1MB' });
        }
        return res.status(500).json({ message: 'Image upload failed', error: err.message });
      }
  
      // If no error, call controller
      addProject(req, res);
    });
  });
  

//GET
route.get('/getproject', getProject)//get method used to get data
//DELETE
route.delete('/deleteproject/:_id',deleteProject)//delete method used to delete data

//UPDATE
//route.put('/update/:_id',updateuser)//put method used to update data

route.put('/updateproject/:_id', (req, res) => {
  photoUpload(req, res, function (err) {
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ message: 'Image size should not exceed 1MB' });
      }
      return res.status(500).json({ message: 'Image upload failed', error: err.message });
    }

    updateProject(req, res);
  });
});

module.exports = route;
