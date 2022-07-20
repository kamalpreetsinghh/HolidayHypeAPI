const Hotel = require('../models/hotel')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  Hotel.find()
    .then((result) => {
      let hotels = []
      let hotelDetails = {}

      result.forEach(hotel => {
        const { id, name, address, description, price, type, latitude, longitude, date, numberOfRooms, imageUrl } = hotel
        hotelDetails = { id, name, address, description, price, type, latitude, longitude, date, numberOfRooms, imageUrl }

        hotels.push(hotelDetails)
      });
      res.send(hotels)
    })
    .catch((error) => res.status(500).send(error.message))
})

router.post('/insert', (req, res) => {

  const hotelDocument = new Hotel({ name: req.body.name, address: req.body.address, 
  description: req.body.description, price: req.body.price, type: req.body.type, 
  latitude: req.body.latitude, longitude: req.body.longitude, date: req.body.date, 
  numberOfRooms: req.body.numberOfRooms, 
  imageUrl: req.body.imageUrl, phone: req.body.phone, 
  website: req.body.website })

  hotelDocument.save()
  .then((result) => res.send(result))
  .catch((error) => res.status(500).send(error.message))
})

module.exports = router