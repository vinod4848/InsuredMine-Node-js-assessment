const InsuranceCarrier = require("../models/Carrier");

exports.createInsuranceCarrier = async (req, res) => {
  try {
    const newCarrier = new InsuranceCarrier(req.body);
    const savedCarrier = await newCarrier.save();
    res.status(201).json(savedCarrier);
  } catch (error) {
    res.status(500).json({ error: "Failed to create insurance carrier." });
  }
};

exports.getAllInsuranceCarriers = async (req, res) => {
  try {
    const carriers = await InsuranceCarrier.find();
    res.status(200).json(carriers);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve insurance carriers." });
  }
};
