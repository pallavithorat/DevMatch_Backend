const validator = require("validator");
const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!firstName || !lastName) {
    throw new Error("Name is not valid!");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid!");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter a strong Password!");
  }
};

const validateEditProfileData = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "emailId",
    "photoUrl",
    "gender",
    "age",
    "about",
    "skills",
  ];
  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );
  return isEditAllowed;
};

//Validation for password
function validatePasswordChangeData(req) {
  const { oldPassword, newPassword } = req.body;

  // Check if both old and new passwords are provided
  if (!oldPassword || !newPassword) {
    return false;
  }

  // Add more rules for new password (e.g., minimum length of 8 characters)
  if (newPassword.length < 8) {
    return false;
  }

  // can add more validations in future here, like checking for special characters or numbers
  return true;
}

module.exports = {
  validateSignUpData,
  validateEditProfileData,
  validatePasswordChangeData
};