const model = require('../model/projectModel'); // Ensure correct model import

//POST API
const addProject = async (req, res) => {
    const { projectName,projectDisc,githubLink,demoLink} = req.body //taking data from user
    // const { empid, empname} = req.body
    try{

        const data = await model.create({   //chacking req.body data is same or not and storing into database
            projectName,
            projectDisc,
            githubLink,
            demoLink,
            image: req.file.filename //image name
        })
        res.status(200).send(data);

    }

    catch(err){
        console.log(err);
    }
}

//Get API
const getProject = async (req, res) => {
    try{
        
        const projectData = await model.find();
        res.status(200).send(projectData);//this line is always same
    }
    catch(err){
        console.log(err)
    }
}

//Delete API
const deleteProject = async (req,res)=>{
    try{
        const deletedata = await model.deleteOne({_id:req.params._id})
        res.status(200).send(deletedata)
    }

    catch(err){
        console.log(err)
    }
}

//Update API
const updateProject = async (req,res)=>{
    try{
        const updatedata = await model.updateOne({_id:req.params._id},req.body)
        res.status(200).send(updatedata)
    }

    catch(err){
        console.log(err)
    }
}

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
module.exports = {addProject,getProject,deleteProject,updateProject} //exporting add and getdata function to route.js