const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "not valid email"],
  },

  password: {
    type: String,
    require: true,
    minLength: 8,
    select: false,
  },
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// this is going to avalible for entire model instance
//using Schema.method we can generalize methods for entire model
userSchema.methods.comparePassword = async function (
  enterdPassword,
  hashedPassword
) {
  return await bcrypt.compare(enterdPassword, hashedPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
