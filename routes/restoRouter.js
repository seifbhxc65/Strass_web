const express=require('express');
const router=express.Router();
const menuRouter=require('./menuRouter');
const {getAllRestaurants,getOneRestaurant, updateRestaurant, deleteRestaurant, createRestaurant}=require('../controllers/restoController')
router.use('/:restaurantId/menu',menuRouter);
router.route('/')
.get(getAllRestaurants)
.post(createRestaurant)
router.route('/:id')
      .get(getOneRestaurant)
      .delete(deleteRestaurant)
      .patch(updateRestaurant)
module.exports=router;