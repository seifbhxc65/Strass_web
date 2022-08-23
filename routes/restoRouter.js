const express=require('express');
const router=express.Router({mergeParams:true});
const menuRouter=require('./menuRouter');
const {getAllRestaurants,getOneRestaurant, updateRestaurant, deleteRestaurant, createRestaurant}=require('../controllers/restoController');
const Restaurant = require('../model/Restaurant');
const verifFieldExist = require('../middleware/verifFieldExist');
router.use('/:restaurantId/menu',verifFieldExist(Restaurant,"restaurantId"));
router.use('/:restaurantId/menu',menuRouter);

router.route('/')
.get(getAllRestaurants)
.post(createRestaurant)
router.route('/:id')
      .get(getOneRestaurant)
      .delete(deleteRestaurant)
      .patch(updateRestaurant)
module.exports=router;