const express = require("express");
const router = express.Router();
const hotelsController = require("../../controllers/hotelsController");

router.get("/", hotelsController.getHotels);

router.post("/insert", hotelsController.saveHotel);

module.exports = router;
