const express=require('express');
const router=express.Router({mergeParams:true});
const mealRouter=require('./mealRouter');
const {getAllMenus,getOneMenu, updateMenu, deleteMenu, createMenu}=require('../controllers/menuController');
router.use('/:menuId/meal',mealRouter);
router.route('/')
.get(getAllMenus)
.post(createMenu)
router.route('/:id')
      .get(getOneMenu)
      .delete(deleteMenu)
      .patch(updateMenu)
module.exports=router;