const express=require('express');
const app=express();
const ownerRouter=require('./routes/ownerRouter');
// app.get('/',(req,res)=>{
//     res.send("we're ready !!");
// })
app.use(express.json({
    limit:'10kb'
  }));
app.use('/api/v1/owner',ownerRouter);
module.exports=app;
