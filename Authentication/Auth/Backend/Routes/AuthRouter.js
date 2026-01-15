const { login, signup } = require('../Controller/AuthController');
const { signupValidation, loginValidation } = require('../Middleware/Authvalidation');


const router =require('express').Router();

router.post('/login',loginValidation,login)

router.post('/signup', signupValidation, signup);

module.exports=router;