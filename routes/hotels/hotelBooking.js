const express = require("express");
const router = express.Router();
const hotelsController = require("../../controllers/hotelsController");

router.get("/:userID/:hotelID", hotelsController.getHotelBookingByID);

router.post("/insert", hotelsController.saveHotelBooking);

module.exports = router;
