
const Owner = require("../model/owner");
const appError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const { createToken } = require("../utils/jwt");
const jwt=require('jsonwebtoken')
exports.registerOwner = catchAsync(async (req, res, next) => {

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
  createToken(res,owner,201);
});
exports.loginOwner=catchAsync(async (req,res,next)=>{
    const  {email,password}=req.body;
    
    if(!email || !password) return next (new appError('you  need to provide your email and password'));
    const owner=await Owner.findOne({email}).select('+password');

    if(!owner || !(await owner.correctPassword(password,owner.password))) return next(new appError('incorrect password or email',401));
    createToken(res,owner,201);
});
