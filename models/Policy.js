const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
  agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  policyMode: { type: String, required: true },
  producer: { type: String },
  policyNumber: { type: String, required: true },
  premiumAmountWritten: { type: Number },
  premiumAmount: { type: Number },
  policyType: { type: String },
  companyName: { type: String },
  categoryName: { type: String },
  policyStartDate: { type: Date },
  policyEndDate: { type: Date },
});

const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;
