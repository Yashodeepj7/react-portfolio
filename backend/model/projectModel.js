//use to define schema for the database
const mongoose = require('mongoose');//importing mongoose

const projectSchema = mongoose.Schema({ //S must be capital and creating collection
    projectName:String,
    projectDisc:String,
    githubLink:String,
    demoLink:String,
    image:String
});



module.exports = mongoose.model('project', projectSchema);
