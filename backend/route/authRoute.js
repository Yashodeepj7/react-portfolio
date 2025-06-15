const express = require('express');
const router = express.Router();
const authController = require('../Controller/authController');
const authMiddleware = require('../auth_Middleware');

// Route to register a student
router.post('/register', authController.register);

// Route to login a student
router.post('/login', authController.login);


module.exports = router;
