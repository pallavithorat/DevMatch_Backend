const express = require('express');
const connectDB = require("./config/database");
const app = express(); //creating a new web server, so i have to call listen over here so anybody can connect to us
const cookieParser = require("cookie-parser");

app.use(express.json()); //middleware
app.use(cookieParser());

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"], // Specify allowed methods
  })
);
// Explicitly handle preflight requests
app.options("*", cors());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

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
