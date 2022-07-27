const jwt=require('jsonwebtoken');
const signToken=id=>jwt.sign({id},process.env.JWT_SECRET,{
    expiresIn:process.env.JWT_EXPIRES_IN
})
exports.createToken=   (res,user,statusCode)=>{
const token=signToken(user.id);
res.cookie('jwt',token,{
    expires:new Date( Date.now()+process.env.JWT_COOKIE_EXPIRES_IN*24*60*60*1000),
    httpOnly:true
})
user.password=undefined;
res.status(statusCode).json({
    status:'sucess',
    token,
    data:{
        user

    }
})
}