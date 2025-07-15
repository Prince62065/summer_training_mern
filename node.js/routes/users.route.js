const express=require('express');
const router=express.Router();
const registerController=require('../controllers/users.controller');

router.post('/login',registerController.register);

module.exports=router;