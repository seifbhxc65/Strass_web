const mongoose=require('mongoose');
const valid=require('validator');
const ownerSchema=mongoose.Schema(
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
        adresss:{
            type:'string',

        }
    }
)
const Owner=mongoose.model('Owner',ownerSchema);
module.exports=Owner;