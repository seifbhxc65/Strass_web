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
const requiredDocument=await Model.findOne({
    _id:fieldValue,
    ...req.params //menuId is included but it won't affect the query
});
console.log(req.params);
if(!requiredDocument) return next(new appError(`the provided ${field} does not correspond to any document`))
next();
})