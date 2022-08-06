const mongoose = require("mongoose");
const valid = require("validator");
//its going to be nested inside the restau model
const mealSchema = mongoose.Schema({
  // type,coverPhoto,description,meals
  title:{
       type:String,
       required:[true,'the meal must have a title'],

  },
  coverPhoto:{
    type:String,
    default:'cover.jpg'
  },
  menuId:{
    type:mongoose.Schema.ObjectId,
    ref:'Menu'
   },
 price:{
  type:Number,
  required:[true,'the meal should be priced'],
 },
  photosList:[String],
  description:{
    type:String,
    trim:true
  },
  //meals,
});
const Meal=mongoose.model('Meal',mealSchema);
module.exports=Meal;