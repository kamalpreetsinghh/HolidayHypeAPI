const HotelBooking = require('../models/hotelBooking')
const pdfService = require('../services/pdf-service')
const emailService = require('../services/email-service')
const express = require('express')
const router = express.Router()

router.get('/:userID/:hotelID', (req, res) => {
  HotelBooking.findOne({ userID: req.params.userID, hotelID: req.params.hotelID })
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

  pdfService.buildHotelPDF(req.body).then((invoice) => emailService.sendHotelEmail(invoice, req.body.email));

})

module.exports = router