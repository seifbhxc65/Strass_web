const { default: mongoose } = require("mongoose");
const appError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

module.exports=(Model,field)=>catchAsync(async (req,res,next)=>{
    let fieldValue=req.body[field];
    if (!fieldValue) {
        
        if(req.params[field])
            {
                req.body[field]=req.params[field];
                fieldValue=req.body[field];
            }
        else
        return next(new appError(`you need to provide the value of ${field}`,400));
    }
//
const lastId= req.url.split('/')[1];
const initialQuery=await Model.findOne({
    _id:fieldValue,
    ///"menu.type":"turkish menu"
    // menu:{
    //     $elemMatch:{id:"631412e676ba18cfc5d1e17f"}
    // },
   // ...req.params //menuId is included but it won't affect the query
});
// .elemMatch('menu',{id:mongoose.Types.ObjectId("631412e676ba18cfc5d1e17f")})
const requiredDocument=await initialQuery.elemMatch('menu',{type:"turkish menu"});
console.log(requiredDocument);
if(!requiredDocument) return next(new appError(`the provided ${field} does not correspond to any document`))
next();
})