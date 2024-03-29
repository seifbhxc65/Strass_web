const Meal=require("../model/Meal");
const appError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const {createOne,getAll,getOne,deleteOne,updateOne}=require('./crudController');
exports.createMeal=createOne(Meal);
exports.getOneMeal=getOne(Meal);
exports.getAllMeals=getAll(Meal);
exports.updateMeal=updateOne(Meal);
exports.deleteMeal=deleteOne(Meal);
