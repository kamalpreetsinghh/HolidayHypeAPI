const FlightBooking = require("../models/flightBooking");
const Flight = require("../models/flight");
const User = require("../models/user");
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
    const result = await FlightBooking.findById(req.params.id).populate(
      "flightID"
    );
    if (result) {
      res.send(result);
    } else {
      res
        .status(404)
        .send({
          success: false,
          message: "The flight booking with the given is was not found",
        });
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

    const result2 = await Flight.findById(req.body.flightID);

    const result3 = await User.findOne({ userID: req.body.userID });

    if (result2 && result3) {
      const doc = await pdfService.buildFlightPDF(req.body, result2, result3);

      emailService.sendEmail(doc, result3.email, "Flight");
    }
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
    const result = await FlightBooking.find(req.params).populate("flightID");
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
