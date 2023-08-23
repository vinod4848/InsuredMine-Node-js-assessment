const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  dob: { type: Date },
  licenseNumber: { type: String, required: true, unique: true },
  agencyName: { type: String },
  specialties: [String],
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;
