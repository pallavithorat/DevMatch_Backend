const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://thoratpallavi86:PX1cHK6s6MAFqOAW@namastenode.czqmk.mongodb.net/devBuddy"
  );
};
module.exports = connectDB;
