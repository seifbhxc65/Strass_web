const mongoose = require("mongoose");
const valid = require("validator");
const appError = require("../utils/appError");
const Menu=require('./Menu');
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
mealSchema.post('save',async (doc,next)=>{
 const targetedMenu= await Menu.findOne({_id:doc.menuId});
 if(!targetedMenu) return next (new appError('cant find the targeted menu',404))
 targetedMenu.meals.push(doc)
 await targetedMenu.save();
});
const Meal=mongoose.model('Meal',mealSchema);
module.exports=Meal;