const express = require("express");
const router = express.Router();
const insuranceCarrierController = require("../controllers/carrierController");

router.post("/", insuranceCarrierController.createInsuranceCarrier);

router.get("/", insuranceCarrierController.getAllInsuranceCarriers);

module.exports = router;
