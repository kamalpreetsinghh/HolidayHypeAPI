const FlightBooking = require("../models/flightBooking");
const Flight = require("../models/flight");
const pdfService = require("../services/pdf-service");
const emailService = require("../services/email-service");

const getFlights = async (req, res) => {
  try {
    const result = await Flight.find();

    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const saveFlight = async (req, res) => {
  const flightDocument = new Flight(req.body);

  try {
    const result = await flightDocument.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getFlightBookingByID = async (req, res) => {
  try {
    const result = await FlightBooking.findById(req.params.id);
    if (result) {
      res.send(result);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const saveFlightBooking = async (req, res) => {
  const flightBookingDocument = new FlightBooking(req.body);

  try {
    const result = await flightBookingDocument.save();
    res.send(result);

    const doc = pdfService.buildFlightPDF(req.body);
    emailService.sendEmail(doc);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateFlightBooking = async (req, res) => {
  try {
    const result = await FlightBooking.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

const deleteFlightBooking = async (req, res) => {
  try {
    const result = await FlightBooking.deleteOne(req.params);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const getFlightsByUserID = async (req, res) => {
  try {
    const result = await FlightBooking.find(req.params);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getFlights,
  saveFlight,
  getFlightsByUserID,
  getFlightBookingByID,
  updateFlightBooking,
  deleteFlightBooking,
  saveFlightBooking,
};
