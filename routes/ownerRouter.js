const express=require('express');
const router=express.Router();
const authCtr=require('../controllers/authController');
const owner = require('../model/owner');
router.post('/register',authCtr.registerOwner);
router.post('/login',authCtr.loginOwner);
router.get('/logout',authCtr.protectRoute(owner),authCtr.logout);
module.exports=router;
   