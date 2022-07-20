const Hotel = require('../models/hotel')
const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
  Hotel.findById(req.params.id)
    .then((result) => {
      if(result) {
        const { id, name, address, description, price, type, latitude, longitude, date, numberOfRooms, imageUrl, phone, website } = result
        const hotelDetails = { id, name, address, description, price, type, latitude, longitude, date, numberOfRooms, imageUrl, phone, website }

        res.send(hotelDetails)
      } else {
        res.sendStatus(404)
      }
      
    })
    .catch((error) => res.status(500).send(error.message))
})

module.exports = router