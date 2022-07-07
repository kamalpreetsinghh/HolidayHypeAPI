const HotelBooking = require('../models/hotelBooking')
const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
  Hotel.findById(req.params.id)
    .then((result) => {
      if(result) {

      let hotelBookingDetails = {}
        const { name, email, phone, guestName, numberOfRooms, userID, hotelID, hotelName, cardNumber } = result
        hotelBookingDetails = { name, email, phone, guestName, numberOfRooms, userID, hotelID, hotelName, cardNumber }

        res.send(hotelBookingDetails)
      } else {
        res.sendStatus(404)
      }
    })
    .catch((error) => console.log(error))
})

router.post('/insert', (req, res) => {

        const hotelBookingDocument = new HotelBooking({ name: req.body.name, email: req.body.email, 
        phone: req.body.phone, guestName: req.body.guestName, numberOfRooms: req.body.numberOfRooms, 
        userID: req.body.userID, hotelID: req.body.hotelID, hotelName: req.body.hotelName, 
        cardNumber: req.body.cardNumber })
    
        hotelBookingDocument.save()

  res.send("Data Saved Successfully")

})

module.exports = router