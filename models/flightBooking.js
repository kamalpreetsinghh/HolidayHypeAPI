const mongoose = require("mongoose");
const { Schema } = mongoose;

const flightBookingSchema = new Schema({
  flightID: {
    type: mongoose.Types.ObjectId,
    ref: "Flight",
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  flightTo: {
    type: String,
    required: true,
  },
  flightFrom: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  departureDate: {
    type: String,
    required: true,
  },
  landingDate: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
  numberOfChildren: {
    type: Number,
    required: true,
  },
  numberOfAdults: {
    type: Number,
    required: true,
  },
});

const FlightBooking = mongoose.model("FlightBooking", flightBookingSchema);
module.exports = FlightBooking;
