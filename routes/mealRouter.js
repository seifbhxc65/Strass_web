const express=require('express');
const router=express.Router();
const {getAllMeals,getOneMeal, updateMeal, deleteMeal, createMeal}=require('../controllers/mealController');

router.route('/')
.get(getAllMeals)
.post(createMeal)
router.route('/:id')
      .get(getOneMeal)
      .delete(deleteMeal)
      .patch(updateMeal)
module.exports=router;