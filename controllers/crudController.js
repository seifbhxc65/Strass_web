const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const { json } = require("body-parser");
exports.getAll=(Model,options={})=>catchAsync(async (req,res,next)=>{
  console.log(req.params)
    const documents=await Model.find(req.params);
    res.status(200).json({
        size:documents.length,
        status:'sucess',
        data:{
            documents
        }
    })
});
exports.createOne=Model=>catchAsync(

    async (req,res,next)=>{
        req.body={...req.body,...req.params};
        const document =await Model.create(req.body);
        res.status(201)
           .json({
               status:'sucess',
               data:{  
                
                            
                         
                    document  
                          

                        
                     }
           })

    }
)
exports.updateOne=Model=> catchAsync(async(req,res,next)=>{
  const updateddocument=await Model.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true,
  });
  if(!updateddocument) return next(new AppError('we cant find the required document to be updated',404));
  res.status(202).json({
    stauts:'sucess',
    data:{
   updateddocument
    }
  })
 });
 exports.deleteOne=Model=>catchAsync(async (req,res,next)=>{
  
  const options={};
  options._id=req.params.id;
  options[Object.keys(req.params)[0]]=Object.values(req.params)[0];
  const deletedDoc=await Model.findOneAndDelete(options);
  if(!deletedDoc) return next(new AppError('we cant find the required document to be deleted',404));
  res.status(204).json({
    status:'deleted successfully'
  })
 }
 )
 exports.getOne=Model=> catchAsync(async (req,res,next)=>{
  const doc=await Model.findById(req.params.id);
  if(!doc) return next(new AppError("we cant find the required doc",404));
  res.status(200).json({
    stauts:'sucess',
    data:{
      doc
    }
  })
 })