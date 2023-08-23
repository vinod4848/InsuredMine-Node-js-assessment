const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  accountNumber: { type: String, required: true },
  account_type: { type: String, required: true },
  account_name: { type: String, required: true },
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
