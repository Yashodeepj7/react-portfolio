const model = require('../model/contactModel'); // Ensure correct model import

//POST API
const addContact = async (req, res) => {
    const { name, email, message} = req.body //taking data from user
    // const { empid, empname} = req.body
    try{

        const data = await model.create({   //chacking req.body data is same or not and storing into database
            name,
            email,
            message,
        })
        res.status(200).send(data);

    }

    catch(err){
        console.log(err);
    }
}

//Get API
const getContact = async (req, res) => {
    try{
        
        const contactData = await model.find();
        res.status(200).send(contactData);//this line is always same
    }
    catch(err){
        console.log(err)
    }
}

//Delete API
const deleteContact = async (req,res)=>{
    try{
        const deletedata = await model.deleteOne({_id:req.params._id})
        res.status(200).send(deletedata)
    }

    catch(err){
        console.log(err)
    }
}

//Update API
// const updateuser = async (req,res)=>{
//     try{
//         const updatedata = await model.updateOne({_id:req.params._id},req.body)
//         res.status(200).send(updatedata)
//     }

//     catch(err){
//         console.log(err)
//     }
// }

// const updateuser = async (req,res)=>{
//     const {name,email,rollno} = req.body;
//     try{
//         const updatedata = await model.updateOne({_id:req.params._id},{$set:{name,email,rollno}}
//             );
//             if(updatedata.modifiedCount > 0)
//             {
//                 res.status(200).send(updatedata);
//             }
//             else{
//                 res.status(500).send(updatedata)
//             }
// }
// catch(err)
// {
//     console.log(err);
// }
// }
module.exports = {addContact,getContact,deleteContact} //exporting add and getdata function to route.js