const mongoose = require("mongoose");
const valid = require("validator");
//its going to be nested inside the restau model
const menuSchema = mongoose.Schema({
  // type,coverPhoto,description,meals
  type:{
       type:String,
       required:[true,'the menu must have a type (dinner,breakfast,drinks,italien,french,etc ...)'],
  },
  coverPhoto:{
    type:String,
    default:'cover.jpg'
  },
  description:{
    type:String,
    trim:true
  },
  meals:{
    type:mongoose.Schema.ObjectId,
    ref:'Meal'
  },
});
menuSchema.pre(/^find/,function(next) {
this.populate({
  path:'meals'
});
next();
})
const Menu=mongoose.model('Menu',menuSchema);
module.exports=Menu;