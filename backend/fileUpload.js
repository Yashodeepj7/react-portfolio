const multer = require('multer')
const path = require('path')

const photoStorage = multer.diskStorage({
    destination : ( req, file, cd) => {
        cd(null,path.join(__dirname,'./Images'))
    }
    // filename: (req, file, cd) => {
    //     cd(null,file.originalname)
    // }
})

const photoUpload = multer({
    storage:photoStorage,
    limits: { fileSize: 1 * 1024 * 1024 },
    
}).single('image');

module.exports = {photoUpload}