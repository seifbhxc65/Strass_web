const express=require('express');
const router=express.Router({mergeParams:true});
const {getAllMeals,getOneMeal, updateMeal, deleteMeal, createMeal}=require('../controllers/mealController');

const verifFieldExist = require('../middleware/verifFieldExist');
const Menu = require('../model/Menu');

router.route('/')
.get(getAllMeals)
.post(verifFieldExist(Menu,"menuId"),createMeal)
router.route('/:id')
      .get(getOneMeal)
      .delete(deleteMeal)
      .patch(updateMeal)
module.exports=router;