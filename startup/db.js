const mongoose = require("mongoose");
module.exports = (db) => {
  mongoose
    .connect(db)
    .then((cn) => console.log("Connected sucessfully to the database"))
    .catch((err) => console.error(`something went wrong ${err}`));
};
