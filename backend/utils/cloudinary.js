
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dv2x59nsh',       // 👈 from Cloudinary dashboard
  api_key: '384327157755541',
  api_secret: 'CkVrfDxtcmK-0LgmHzaeDCpAAqQ',
});

module.exports = cloudinary;
