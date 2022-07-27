const express = require("express");
const router = express.Router();
const flightsController = require("../../controllers/flightsController");

router.get("/:id", flightsController.getFlightBookingByID);

router.post("/insert", flightsController.saveFlightBooking);

module.exports = router;
