
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
exports.protectRoute= Model=>catchAsync( async(req,res,next)=>{
    let token;
    if(req.headers.authorization?.startsWith('Bearer')){
            token=req.headers.authorization.split(' ')[1];
    }
    else if(req.cookies.jwt) token=req.cookies.jwt;
    if(!token){
        return next(new appError('u are logged out , please log in to get acess',401));
    }
    
    const decoded=await jwt.verify(token,process.env.JWT_SECRET);

    const user=await Model.findById(decoded.id);
    if(!user) return next(new appError("this user no longer exist",404));
    if(user.passwordChangedAfter(decoded.iat))
    {return next(new appError('password was changed after the token release',401));}
    req.user=user;
    next();

   
});
exports.restrictTo=(...roles)=>(req,res,next)=>{
    if(!roles.includes(req.user.role)){
        return next(new appError('you are not allowed to access this route',403))
    }
    next();
}

exports.logout=(req,res,next)=>{
    res.cookie('jwt','logout',{
expires: new Date( Date.now())
})
res.status(200).json({
    status:'success',
    message:'logged out succesfully'
})
};