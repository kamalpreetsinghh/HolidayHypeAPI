const express = require("express");
const router = express.Router();
const flightsController = require("../../controllers/flightsController");

router.get("/", flightsController.getFlights);

router.post("/insert", flightsController.saveFlight);

module.exports = router;
