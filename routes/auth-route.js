const express = require('express');
const authController = require('../controllers/auth-controller');
const route = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;