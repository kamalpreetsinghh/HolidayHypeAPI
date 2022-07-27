const express = require("express");
const router = express.Router();
const hotelsController = require("../../controllers/hotelsController");

router.get("/:id", hotelsController.getHotelBookingByID);

router.post("/insert", hotelsController.saveHotelBooking);

router.put(":id", hotelsController.updateHotelBooking);

router.delete(":id", hotelsController.deleteHotelBooking);

router.get("/user/:userID", hotelsController.getHotelsByUserID);

module.exports = router;
