
const Owner = require("../model/owner");
const appError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.registerOwner = catchAsync(async (req, res, next) => {
 console.log(req.body);
  const { firstName, lastName, password, photo, email, address } = req.body;
  const owner = await Owner.create({
    firstName,
    lastName,
    password,
    photo,
    email,
    address,
  });
  if(!owner) return next(new appError('an error happened during creation of the new owner',400));
  res.status(201).json({
    status:'sucess',
    data:{
        owner
    }
  })
});
exports.login=catchAsync(async (req,res,next)=>{
    
})
