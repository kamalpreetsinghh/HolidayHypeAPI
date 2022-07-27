const express = require("express");
const router = express.Router();
const placesController = require("../../controllers/placesController");

router.get("/", placesController.getPlaces);

module.exports = router;
