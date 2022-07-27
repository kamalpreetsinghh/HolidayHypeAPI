const Restaurant = require("../models/restaurant");

const getRestaurants = async (req, res) => {
  try {
    const result = await Restaurant.find();
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getRestaurantByID = async (req, res) => {
  try {
    const result = await Restaurant.findById(req.params.id);
    if (result) {
      res.send(result);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getRestaurants,
  getRestaurantByID,
};
