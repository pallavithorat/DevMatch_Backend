const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://thoratpallavi86:23K324wjfVnR2zKL@namastenode.czqmk.mongodb.net/devBuddy"
  );
};
module.exports = connectDB;
