const express = require('express');
const router = express.Router();

const {
  getCertifications,
  addCertification,
  updateCertification,
  deleteCertification
} = require('../Controller/certificationController.js');

router.get('/', getCertifications);
router.post('/', addCertification);
router.put('/:id', updateCertification);
router.delete('/:id', deleteCertification);

module.exports = router; // ✅ CommonJS export
