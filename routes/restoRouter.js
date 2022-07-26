const express=require('express');
const router=expres.Router();
const restoController=require('../controllers/restoController')
router.route('/')
.get(restoController)
.post()