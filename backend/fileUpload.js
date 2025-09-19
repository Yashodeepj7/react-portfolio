const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./utils/cloudinary'); 

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'projects', // Cloudinary folder name
    allowed_formats: ['jpg', 'png', 'jpeg'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
  },
});

const photoUpload = multer({
  storage: storage,
  limits: { fileSize: 1 * 1024 * 1024 }, // 1MB limit
}).single('image');

module.exports = { photoUpload };

const certStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'certifications',
    allowed_formats: ['jpg', 'png', 'jpeg'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
  },
});

const certUpload = multer({
  storage: certStorage,
  limits: { fileSize: 1 * 1024 * 1024 }, // 1MB
}).single('image');

module.exports = { certUpload };