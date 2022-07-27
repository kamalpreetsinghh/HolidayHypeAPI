const express = require("express");
const router = express.Router();
const hotelsController = require("../../controllers/hotelsController");

router.get("/:id", hotelsController.getHotelByID);

module.exports = router;
