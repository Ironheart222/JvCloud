const express = require('express');
const router = express.Router();

const auth = require('../controllers/AuthController')


const register_schema = require('../validation/register_schema');
const register_validation = require('../validation/register_velidation');

router.post('/register', register_validation.validateDto(register_schema), auth.registeruser );

router.post('/login', auth.loginuser);
router.delete('/logout', auth.logoutuser)
router.post('/forgot_password', auth.forgot_password)
router.put('/reset_password', auth.reset_password)

module.exports = router