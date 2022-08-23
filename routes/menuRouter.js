const express=require('express');
const router=express.Router({mergeParams:true});
const mealRouter=require('./mealRouter');
const {getAllMenus,getOneMenu, updateMenu, deleteMenu, createMenu}=require('../controllers/menuController');
const verifFieldExist = require('../middleware/verifFieldExist');
const Restaurant = require('../model/Restaurant');
const Menu = require('../model/Menu');
router.use('/:menuId/meal',verifFieldExist(Menu,"menuId"));
router.use('/:menuId/meal',mealRouter);
router.route('/')
.get(getAllMenus)
.post(verifFieldExist(Restaurant,"restaurantId"),createMenu)
router.route('/:id')
      .get(getOneMenu)
      .delete(deleteMenu)
      .patch(updateMenu)
module.exports=router;