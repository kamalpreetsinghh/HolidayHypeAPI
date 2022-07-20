const Restaurant = require('../models/restaurant')
const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
  Restaurant.findById(req.params.id)
    .then((result) => {
      if(result) {
        let restrauntDetails = {}
        const { id, title, description, imgSrc, restaurantType, latitude, longitude, address, phone } = result
        restrauntDetails = { id, title, description, imgSrc, restaurantType, latitude, longitude, address, phone }
        res.send(restrauntDetails)
      } else {
        res.sendStatus(404)
      }
      
    })
    .catch((error) => res.status(500).send(error.message))
})

module.exports = router