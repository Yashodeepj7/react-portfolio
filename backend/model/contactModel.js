//use to define schema for the database
const mongoose = require('mongoose');//importing mongoose

const projectSchema = mongoose.Schema({ //S must be capital and creating collection
    name:String,
    email:String,
    message:String
    
});



module.exports = mongoose.model('contact', projectSchema);
