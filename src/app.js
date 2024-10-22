const express = require('express');
const connectDB = require("./config/database");
const app = express(); //creating a new web server, so i have to call listen over here so anybody can connect to us
const cookieParser = require("cookie-parser");

app.use(express.json()); //middleware
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);


  connectDB()
    .then(() => {
      console.log("Database connection established...");
      app.listen(3000, () => {
        console.log("Server is successfully listening on port 3000...");
      });
    })
    .catch((err) => {
      console.error("Database cannot be connected!!");
    });
