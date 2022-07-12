const FlightBooking = require('../models/flightBooking')
const pdfService = require('../services/pdf-service')
const emailService = require('../services/email-service')
const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    FlightBooking.findById(req.params.id)
      .then((result) => {
        if(result) {
          const { flightID, flightName, flightTo, flightFrom, departureTiming, landingTiming, totalTiming,
          fare, type, flightImage, departureDate, landingDate, className, numberOfChildren, numberOfAdults } = result
          const userDetails = { flightID, flightName, flightTo, flightFrom, departureTiming, landingTiming, totalTiming,
            fare, type, flightImage, departureDate, landingDate, className, numberOfChildren, numberOfAdults }
    
          res.send(userDetails)
        } else {
            res.sendStatus(404)
        }
      })
      .catch((error) => console.log(error))
})

router.post('/insert', (req, res) => {

    const flightBookingDocument = new FlightBooking({ flightID: req.body.flightID, flightName: req.body.flightName, flightTo: req.body.flightTo,
        flightFrom: req.body.flightFrom, departureTiming: req.body.departureTiming , landingTiming: req.body.landingTiming, 
        totalTiming: req.body.totalTiming, fare: req.body.fare, type: req.body.type, flightImage: req.body.flightImage, 
        departureDate: req.body.departureDate, landingDate: req.body.landingDate, className: req.body.className, 
        numberOfChildren: req.body.numberOfChildren, numberOfAdults: req.body.numberOfAdults })

    flightBookingDocument.save()
      res.send('Data Saved Successfully')
    

    // const stream = res.writeHead(200, {
    //   'Content-Type': 'application/pdf',
    //   'Content-Disposition': `attachment;filename=invoice.pdf`,
    // });

    const invoice = pdfService.buildPDF(req.body).then((invoice) => emailService.sendEmail(invoice));

})

module.exports = router