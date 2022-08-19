const appError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

module.exports=(Model,field)=>catchAsync(async (req,res,next)=>{
    const fieldValue=req.body[field];
    if (!fieldValue) return next(new appError(`you need to provide the value of ${field}`,400));

const requiredDocument=await Model.findById(fieldValue);
if(!requiredDocument) return next(new appError(`the provided ${field} does not correspond to any document`))
next();
})