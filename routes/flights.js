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
    .catch((error) => res.status(500).send(error.message))
})

router.post('/insert', (req, res) => {

        const flightDocument = new Flight({ name: req.body.name, flightNumber: req.body.flightNumber,
            departureTiming: req.body.departureTiming , landingTiming: req.body.landingTiming, totalTiming: req.body.totalTiming, 
            fare: req.body.fare, stops: req.body.stops, imageUrl: req.body.imageUrl })
    
        flightDocument.save()
        .then((result) => res.send(result))
        .catch((error) => res.status(500).send(error.message))
})

module.exports = router