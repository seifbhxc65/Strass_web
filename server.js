const dotenv = require("dotenv");
dotenv.config({
  path: `${__dirname}/process.env`,
});
let x;

const dbConnet = require(`${__dirname}/startup/db`);
const Owner = require("./model/Owner");
const port = process.env.PORT;

dbConnet(process.env.DATABASE);
const app = require("./app");
const server = app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
