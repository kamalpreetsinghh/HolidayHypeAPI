const HotelBooking = require("../models/hotelBooking");
const Hotel = require("../models/hotel");
const pdfService = require("../services/pdf-service");
const emailService = require("../services/email-service");
const express = require("express");
const router = express.Router();

router.get("/:userID/:hotelID", (req, res) => {
  HotelBooking.findOne({
    userID: req.params.userID,
    hotelID: req.params.hotelID,
  })
    .then((result) => {
      if (result) {
        let hotelBookingDetails = {};
        const {
          name,
          email,
          phone,
          guestName,
          numberOfRooms,
          userID,
          hotelID,
          hotelName,
          cardNumber,
        } = result;
        hotelBookingDetails = {
          name,
          email,
          phone,
          guestName,
          numberOfRooms,
          userID,
          hotelID,
          hotelName,
          cardNumber,
        };

        res.send(hotelBookingDetails);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((error) => res.status(500).send(error.message));
});

router.post("/insert", (req, res) => {
  const hotelBookingDocument = new HotelBooking({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    guestName: req.body.guestName,
    numberOfRooms: req.body.numberOfRooms,
    userID: req.body.userID,
    hotelID: req.body.hotelID,
    hotelName: req.body.hotelName,
    cardNumber: req.body.cardNumber,
  });

  hotelBookingDocument
    .save()
    .then((result) => {
      res.send(result);

      Hotel.findById(req.body.hotelID)
        .then((result) => {
          if (result) {
            console.log(result);
            const {
              id,
              name,
              address,
              description,
              price,
              type,
              latitude,
              longitude,
              date,
              numberOfRooms,
              imageUrl,
              phone,
              website,
            } = result;
            const hotelDetails = {
              id,
              name,
              address,
              description,
              price,
              type,
              latitude,
              longitude,
              date,
              numberOfRooms,
              imageUrl,
              phone,
              website,
            };

            pdfService
              .buildHotelPDF(
                hotelDetails,
                req.body.name,
                req.body.guestName,
                req.body.numberOfRooms
              )
              .then((doc) => {
                emailService.sendHotelEmail(doc, req.body.email);
              })
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => res.status(500).send(error.message));
    })
    .catch((error) => res.status(400).send(error.message));
});

module.exports = router;
