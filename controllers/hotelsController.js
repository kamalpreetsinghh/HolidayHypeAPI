const Hotel = require("../models/hotel");
const HotelBooking = require("../models/hotelBooking");
const pdfService = require("../services/pdf-service");
const emailService = require("../services/email-service");

const getHotels = async (req, res) => {
  try {
    const result = await Hotel.find();
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const saveHotel = async (req, res) => {
  const hotelDocument = new Hotel(req.body);
  try {
    const result = await hotelDocument.save();
    res.send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getHotelByID = async (req, res) => {
  try {
    const result = await Hotel.findById(req.params.id);

    if (result) {
      res.send(result);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getHotelBookingByID = async (req, res) => {
  try {
    const result = await HotelBooking.findOne(req.params);

    if (result) {
      res.send(result);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const saveHotelBooking = async (req, res) => {
  const hotelBookingDocument = new HotelBooking(req.body);

  try {
    const result = await hotelBookingDocument.save();
    res.send(result);

    const result2 = await Hotel.findById(req.body.hotelID);
    if (result2) {
      await pdfService.buildHotelPDF(
        result2,
        req.body.name,
        req.body.guestName,
        req.body.numberOfRooms
      );

      emailService.sendHotelEmail(doc, req.body.email);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getHotels,
  saveHotel,
  getHotelByID,
  getHotelBookingByID,
  saveHotelBooking,
};
