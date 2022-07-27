const sendErrorDev=(err,req,res)=>{
   res.status(err.statusCode).json({
      name:err.name,
      status:err.status,
      message:err.message,
      stack:err.stack,
      error:err
    })
  }
module.exports=(err,req,res,next)=>{
if(process.env.NODE_ENV==="development"){
    err.statusCode=err.statusCode||500;
    err.status=err.status||"error"
    sendErrorDev(err,req,res)
}
}