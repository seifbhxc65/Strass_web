const express=require('express');
const router=express.Router();
const authCtr=require('../controllers/authController');
router.post('/register',authCtr.registerOwner);
module.exports=router;
   