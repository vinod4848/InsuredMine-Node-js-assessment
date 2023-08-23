const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  name: { type: String },
  city: { type: String },
  phone: { type: String },
  address: { type: String },
  state: { type: String },
  zip: { type: String },
  dob: { type: Date },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
