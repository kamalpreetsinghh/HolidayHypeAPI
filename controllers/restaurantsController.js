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
      res
        .status(404)
        .send({
          success: false,
          message: "Restaurant with the give id was not found.",
        });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getRestaurants,
  getRestaurantByID,
};
