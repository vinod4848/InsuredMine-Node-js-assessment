const express = require("express");
const router = express.Router();
const insuranceCarrierController = require("../controllers/carrierController");

router.post(
  "/createCarrier",
  insuranceCarrierController.createInsuranceCarrier
);

router.get(
  "/createCarrier",
  insuranceCarrierController.getAllInsuranceCarriers
);

module.exports = router;
