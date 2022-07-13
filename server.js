const dotenv=require('dotenv');
dotenv.config(
    {
        path:'./.env'
    }
)
const dbConnet=require(`${__dirname}/startup/db`);
const port=process.env.PORT;
dbConnet(process.env.DATABASE);
const app=require('./app');
const server=app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})