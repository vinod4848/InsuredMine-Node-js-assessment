const mongoose = require("mongoose");

const CarrierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
  website: String,
  policies: [
    {
      policyNumber: String,
      policyType: String,
      startDate: Date,
      endDate: Date,
      premium: Number,
      coverage: String,
      insuredItems: [String],
    },
  ],
});

const Carrier = mongoose.model("Carrier", CarrierSchema);

module.exports = Carrier;
