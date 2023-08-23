const Agent = require("../models/Agent");

exports.createAgent = async (req, res) => {
  try {
    const agentData = req.body;
    const newAgent = await Agent.create(agentData);
    res.status(201).json(newAgent);
  } catch (error) {
    res.status(500).json({ error: "Error creating agent." });
  }
};

exports.getAllAgents = async (req, res) => {
  try {
    const agents = await Agent.find();
    res.status(200).json(agents);
  } catch (error) {
    res.status(500).json({ error: "Error getting agents." });
  }
};
