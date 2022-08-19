const mongoose = require("mongoose");
const valid = require("validator");
//its going to be nested inside the restau model
const Restaurant=require('./Restaurant');
const menuSchema = mongoose.Schema({
  // type,coverPhoto,description,meals
  type:{
       type:String,
       required:[true,'the menu must have a type (dinner,breakfast,drinks,italien,french,etc ...)'],
  },
  restaurantId:{
    type:mongoose.Schema.ObjectId,
    ref:'Restaurant'
   },
  coverPhoto:{
    type:String,
    default:'cover.jpg'
  },
  description:{
    type:String,
    trim:true
  },
  meals:[{
    type:mongoose.Schema.ObjectId,
    ref:'Meal'
  }],
});
menuSchema.post('save',async (doc)=>{
  const targetedRestaurant= await Restaurant.findOne({_id:doc.restaurantId});
  if(!targetedRestaurant) return;
  targetedRestaurant.menu.push(doc)
  await targetedRestaurant.save();
 })
menuSchema.pre(/^find/,function(next) {
this.populate({
  path:'meals'
});
next();
})
const Menu=mongoose.model('Menu',menuSchema);
module.exports=Menu;