const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    fname:String,
    email:String,
    password:String
})

module.exports=mongoose.model('adminDetail',adminSchema)