const express = require("express");
const router = express.Router();
const restaurantsController = require("../../controllers/restaurantsController");

router.get("/:id", restaurantsController.getRestaurantByID);

module.exports = router;
