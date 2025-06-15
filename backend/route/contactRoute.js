const express = require('express');

const route = express.Router()

const {addContact,getContact,deleteContact} = require('../Controller/ContactController')

//POST
route.post('/register', addContact)//post method to add data

//GET
route.get('/getcontact', getContact)//get method used to get data
//DELETE
route.delete('/deletecontact/:_id',deleteContact)//delete method used to delete data

//UPDATE
//route.put('/update/:_id',updateuser)//put method used to update data

// route.put('/updatedata/:_id',update)
module.exports = route;
