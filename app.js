const express=require('express');
const app=express();
const ownerRouter=require('./routes/ownerRouter');
const appError = require('./utils/appError');
const cookieParser = require('cookie-parser')
const errCtr=require(`${__dirname}/controllers/errorController`)
// app.get('/',(req,res)=>{
//     res.send("we're ready !!");
// })

app.use(express.json({
    limit:'10kb'
  }));
app.use(cookieParser())
app.use('/api/v1/owner',ownerRouter);
app.use('*',(req,res,next)=>{
    return next(new appError('this route is not defined',404))
})
app.use(errCtr)
module.exports=app;
