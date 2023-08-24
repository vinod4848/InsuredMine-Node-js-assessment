const Policy = require("../models/Policy");

exports.createPolicy = async (req, res) => {
  try {
    const policyData = req.body;
    const policy = new Policy(policyData);
    const savedPolicy = await policy.save();
    res.status(201).json(savedPolicy);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the policy." });
  }
};

exports.getAllPolicies = async (req, res) => {
  try {
    const policies = await Policy.find();
    res.json(policies);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching policies." });
  }
};

exports.getPolicyById = async (req, res) => {
  try {
    const policyId = req.params.id;
    const policy = await Policy.findById(policyId);
    if (!policy) {
      return res.status(404).json({ error: "Policy not found." });
    }
    res.json(policy);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the policy." });
  }
};

exports.updatePolicy = async (req, res) => {
  try {
    const policyId = req.params.id;
    const updatedPolicyData = req.body;

    const updatedPolicy = await Policy.findByIdAndUpdate(
      policyId,
      updatedPolicyData,
      { new: true }
    );

    if (!updatedPolicy) {
      return res.status(404).json({ error: "Policy not found." });
    }

    res.json(updatedPolicy);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the policy." });
  }
};

exports.deletePolicy = async (req, res) => {
  try {
    const policyId = req.params.id;

    const deletedPolicy = await Policy.findByIdAndDelete(policyId);

    if (!deletedPolicy) {
      return res.status(404).json({ error: "Policy not found." });
    }

    res.json({ message: "Policy deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the policy." });
  }
};
exports.searchBypolicyNumber = async (req, res) => {
  try {
    const { policyNumber } = req.query;
    const policies = await Policy.find({
      policyNumber: { $regex: policyNumber, $options: "i" },
    }).exec();
    res.json(policies);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while searching for policies." });
  }
};

exports.aggregatePoliciesByPolicyType = async (req, res) => {
  try {
    const aggregateData = await Policy.aggregate([
      {
        $group: {
          _id: "$policyType",
          count: { $sum: 1 },
        },
      },
    ]);
    res.json(aggregateData);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while aggregating policies." });
  }
};
