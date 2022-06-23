const Flight = require('../models/flight')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  Flight.find()
    .then((result) => {
      let flights = []
      let flightDetails = {}

      result.forEach(flight => {
        const { id, name, from, to, departureTiming, landingTiming, totalTiming, date, fare, type, imageUrl } = flight
        flightDetails = { id, name, from, to, departureTiming, landingTiming, totalTiming, date, fare, type, imageUrl }

        flights.push(flightDetails)
      });
      res.send(flights)
    })
    .catch((error) => console.log(error))
})

router.post('/insert', (req, res) => {

        const flightDocument = new Flight({ name: req.body.name, from: req.body.from, to: req.body.to, 
            departureTiming: req.body.departureTiming , landingTiming: req.body.landingTiming, totalTiming: req.body.totalTiming, 
            date: req.body.date, fare: req.body.fare, type: req.body.type, imageUrl: req.body.imageUrl })
    
        flightDocument.save()

  res.send("Data Saved Successfully")

})

module.exports = router