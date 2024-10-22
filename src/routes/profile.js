const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../middlewares/auth");
const { validateEditProfileData } = require("../utils/validation");
const { validatePasswordChangeData } = require("../utils/validation");

const bcrypt = require("bcrypt");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
    try {
      if (!validateEditProfileData(req)) {
        throw new Error("Invalid Edit Reques t");
      }
      const loggedInUser = req.user;
      Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));
      await loggedInUser.save();
      res.json({
        message: `${loggedInUser.firstName}, your profile updated successfuly`,
        data: loggedInUser,
      });
    } catch (err) {
      res.status(400).send("ERROR : " + err.message);
    }
  });

  // PATCH /profile/password
profileRouter.patch("/profile/password", userAuth, async (req, res) => {
    try {
      const { oldPassword, newPassword } = req.body;
      
      // Validate input (You can create a custom validation function)
      if (!validatePasswordChangeData(req)) {
        throw new Error("Invalid password change request");
      }
  
      const user = req.user; // user is set by userAuth middleware
  
      // Check if the old password is correct
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
        throw new Error("Incorrect old password");
      }
  
      // Ensure the new password is different from the old password
      if (oldPassword === newPassword) {
        throw new Error("New password must be different from the old password");
      }
  
      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10); // Salt rounds = 10
  
      // Update the user's password and save to the database
      user.password = hashedPassword;
      await user.save();
  
      // Send success response
      res.json({
        message: "Password updated successfully",
      });
    } catch (err) {
      res.status(400).send("ERROR: " + err.message);
    }
  });
  

module.exports = profileRouter;