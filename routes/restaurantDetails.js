const Restaurant = require('../models/restaurant')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  Restaurant.find()
    .then((result) => {
      let restaurants = []
      result.forEach(restaurant => {
        const {id, title, description, imgSrc, restaurantType, latitude, longitude, address, phone} = restaurant
        const restrauntDetails = {id, title, description, imgSrc, restaurantType, latitude, longitude, address, phone}

        restaurants.push(restrauntDetails)
      });
      res.send(restaurants)
    })
    .catch((error) => console.log(error))
})

module.exports = router