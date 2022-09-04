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
const requiredDocument= await Model.findOne({
    _id:fieldValue,
    ...req.params //menuId is included but it won't affect the query
});


const nestedElementIdsToVerify=requiredDocument?.menu.map(el=>el._id.toString());

if(lastId&&nestedElementIdsToVerify.indexOf(lastId)==-1) return next(new appError(`the provided ${field} does not correspond to any document`))
next();
})