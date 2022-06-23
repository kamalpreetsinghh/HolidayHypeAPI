const Hotel = require('../models/hotel')
const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
  Hotel.findById(req.params.id)
    .then((result) => {
      if(result) {
        let hotelDetails = {}
        const { id, name, address, description, price, type, latitude, longitude, date, numberOfRooms, imageUrl, phone, website } = result
        hotelDetails = { id, name, address, description, price, type, latitude, longitude, date, numberOfRooms, imageUrl, phone, website }

        res.send(hotelDetails)
      } else {
        res.sendStatus(404)
      }
      
    })
    .catch((error) => console.log(error))
})

module.exports = router