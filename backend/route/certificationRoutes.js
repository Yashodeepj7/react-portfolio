const express = require('express');
const router = express.Router();
const {
  addCertification,
  getCertifications,
  updateCertification,
  deleteCertification
} = require('../Controller/certificationController');
const { certUpload } = require('../fileUpload');

router.post('/', certUpload, addCertification);
router.get('/', getCertifications);
router.put('/:_id', certUpload, updateCertification);
router.delete('/:_id', deleteCertification);

module.exports = router;
