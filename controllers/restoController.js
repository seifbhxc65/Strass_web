const Restaurant=require("../model/Restaurant");
const appError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const {createOne,getAll,getOne,deleteOne,updateOne}=require('./crudController');
Restaurant.findByIdAndUpdate
exports.createRestaurant=createOne(Restaurant);
exports.getOneRestaurant=getOne(Restaurant);
exports.getAllRestaurants=getAll(Restaurant);
exports.updateRestaurant=updateOne(Restaurant);
exports.deleteRestaurant=deleteOne(Restaurant);
