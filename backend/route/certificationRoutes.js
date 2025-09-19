const express = require('express');
const router = express.Router();
const {
  addCertification,
  getCertifications,
  updateCertification,
  deleteCertification
} = require('../Controller/certificationController');
const { certUpload } = require('../fileUpload');

router.post('/certifications', certUpload, addCertification);
router.get('/certifications', getCertifications);
router.put('/certifications/:_id', certUpload, updateCertification);
router.delete('/certifications/:_id', deleteCertification);

module.exports = router;
