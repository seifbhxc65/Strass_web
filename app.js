const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("we're ready !!");
})
module.exports=app;
