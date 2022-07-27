const express = require("express");
const router = express.Router();
const flightsController = require("../../controllers/flightsController");

router.get("/:id", flightsController.getFlightBookingByID);

router.post("/insert", flightsController.saveFlightBooking);

router.put("/:id", flightsController.updateFlightBooking);

router.delete("/:_id", flightsController.deleteFlightBooking);

router.get("/user/:userID", flightsController.getFlightsByUserID);

module.exports = router;
