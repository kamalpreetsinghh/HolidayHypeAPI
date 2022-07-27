const Places = require("../models/places");

const getPlaces = async (req, res) => {
  try {
    const result = await Places.find();
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getPlaces,
};
