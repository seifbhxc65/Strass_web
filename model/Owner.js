const mongoose=require('mongoose');
const valid=require('validator');
const crypto=require('crypto');
const bcrypt=require('bcryptjs');
const ownerSchema=new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:['true','please provide your first name'],
            minlength:2,
            maxlength:20
        },
        lastName:{
            type:String,
            required:['true','please provide your last name'],
            minlength:2,
            maxlength:25
        },
        password:{
            type:String,
            required:['true','please provide your password'],
            minlength:8,
            select:false,
        },
        email:{
            type:String,
            required:['true','please provide your email'],
            unique:true,
            lowercase:true,
            validate:[valid.isEmail,'please enter a valid email'],
        },
        photo:{
            type:'string',
            default:'default.jpg'
        },
        address:{
            type:'string',

        },
        passwordChangedAt:Date,

    }
);
ownerSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,12);
    next();
});


module.exports=mongoose.models.Owner|| mongoose.model('Owner',ownerSchema);