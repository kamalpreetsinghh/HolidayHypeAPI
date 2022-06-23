const Flight = require('../models/flight')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  Flight.find()
    .then((result) => {
      let flights = []
      let flightDetails = {}

      result.forEach(flight => {
        const { id, name, departureTiming, landingTiming, totalTiming, date, fare, type, imageUrl } = flight
        flightDetails = { id, name, departureTiming, landingTiming, totalTiming, date, fare, type, imageUrl }

        flights.push(flightDetails)
      });
      res.send(flights)
    })
    .catch((error) => console.log(error))
})

router.post('/insert', (req, res) => {

        const flightDocument = new Flight({ name: req.body.name, flightNumber: req.body.flightNumber,
            departureTiming: req.body.departureTiming , landingTiming: req.body.landingTiming, totalTiming: req.body.totalTiming, 
            fare: req.body.fare, stops: req.body.stops, imageUrl: req.body.imageUrl })
    
        flightDocument.save()

  res.send("Data Saved Successfully")

})

module.exports = router