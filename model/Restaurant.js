const mongoose = require("mongoose");
const valid = require("validator");
const slug=require("slug");
const restaurentSchema = new mongoose.Schema({
  //name,location,adress,about,averageRating,numberOfRatings,logo,photos,phoneNumber,openingTime,closingTime
  //additionals: reviews,menu,delivery(boolean),owner
  name: {
    type:String,
    required:[truen,'a restaurant must have a name ! '],
    trim:true,
    maxlength: [40, 'a tour name must never exceed 40 caractere '],
    minlength: [3, 'a tour name must never be less   2 caractere '],
},
owner:{
    type:mongoose.Schema.ObjectId,
    ref:'Owner',
    required:[true,'a restaurant must have an owner']
},
slug:{
    type:String
},
  location: {
    type:{
        type:String,
        default:'Point',
        enum: ['Point'],
        required: true
    },
    coordinates:{
        type:[Number],
        required:true,
    },
    index: '2dsphere'
  },
  address: {
    type:String,
    trim:true,
    required:[true,'A restaurant shoulde have an address'],
  },
  about: {
    type: String,
    trim: true,
    required: [true, 'A restaurant should be followed by a description'],
  },
  averageRating: {
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be above 1'],
    max: [5, 'Rating must be below 5'],
    set: (val) => Math.round(val * 10) / 10,
  },
  numberOfRatings: {
    type:Number,
    default:0,
  },
  logo: {
    type:String,
    default:'logo.JPEG'
  },
  photos: [{
         type:String,
  }],
  phoneNumber: {
    type: String,
    trim: true,
    required: [true, 'A restaurant should be followed by a phone number'],
    minlength:[6,'a phone number must above 5 caracters'],
    maxlength:[16,'a phone number must be below 17 caracters']
  },
  openingTime: Date,
  closingTime: Date,
  delivery:{
    type:Boolean,
    default:true
  }
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});
restaurentSchema.pre('save',(next)=>{
    this.slug=slug(this.name,{
        lower:true
    });
    next();
})

const Restaurant=mongoose.model('Restaurant',restaurentSchema);
module.exports=Restaurant;
