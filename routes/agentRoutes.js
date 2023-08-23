const express = require("express");
const router = express.Router();
const agentController = require("../controllers/agentController");

router.post("/createAgent", agentController.createAgent);

router.get("/getAllAgents", agentController.getAllAgents);

module.exports = router;
