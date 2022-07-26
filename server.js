const dotenv = require("dotenv");
dotenv.config({
  path: `${__dirname}/process.env`,
});

const dbConnet = require(`${__dirname}/startup/db`);
const Owner = require("./model/Owner");
// (async function () {
//   await Owner.create({
//     firstName: "seif",
//     lastName: "belhaj",
//     password: "12345678",
//     email: "saif40340@gmail.com",
//   });
//   console.log('user created sucessfully');
// })();
const port = process.env.PORT;

dbConnet(process.env.DATABASE);
const app = require("./app");
const server = app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
