const express=require('express');
const router=express.Router();
const {getAllRestaurants,getOneRestaurant, updateRestaurant, deleteRestaurant, createRestaurant}=require('../controllers/restoController')

router.route('/')
.get(getAllRestaurants)
.post(createRestaurant)
router.route('/:id')
      .get(getOneRestaurant)
      .delete(deleteRestaurant)
      .patch(updateRestaurant)
module.exports=router;