const Restaurant = require('../models/restaurant')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  Restaurant.find()
    .then((result) => {
      let restaurants = []
      let restrauntDetails = {}
      result.forEach(restaurant => {
        const {id, title, description, imgSrc, restaurantType, latitude, longitude, address, phone} = restaurant
        restrauntDetails = {id, title, description, imgSrc, restaurantType, latitude, longitude, address, phone}
        
        restaurants.push(restrauntDetails)
      });
      res.send(restaurants)
    })
    .catch((error) => console.log(error))
})

module.exports = router