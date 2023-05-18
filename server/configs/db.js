const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(
  "mongodb+srv://A-ALAGH:abbasabbas@cluster0.cjwk7sr.mongodb.net/?retryWrites=true&w=majority",
);

module.exports = {
  connection,
};
