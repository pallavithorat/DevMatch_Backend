const express = require('express');

const connectDB = require("./config/database");

const app = express(); //creating a new web server, so i have to call listen over here so anybody can connect to us

const User = require("./models/user");

app.use(express.json()); //middleware

app.post("/signup", async (req, res) => {
     //   Creating a new instance of the User model
    const user = new User(req.body);

    try {
        await user.save();
        res.send("User Added successfully!");
      } catch (err) {
        res.status(400).send("Error saving the user:" + err.message);
      }
    });

    connectDB()
    .then(() => {
      console.log("Database connection established...");
      app.listen(3000, () => {
        console.log("Server is successfully listening on port 7777...");
      });
    })
    .catch((err) => {
      console.error("Database cannot be connected!!");
    });
