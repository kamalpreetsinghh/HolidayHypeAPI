const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightBookingSchema = new Schema({
    flightID: {
        type: String,
        required: true
    },
    flightName: {
        type: String,
        required: true
    },
    flightTo: {
        type: String,
        required: true
    },
    flightFrom: {
        type: String,
        required: true
    },
    departureTiming: {
        type: String,
        required: true
    },
    landingTiming: {
        type: String,
        required: true
    },
    totalTiming: {
        type: String,
        required: true
    },
    fare: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    flightImage: {
        type: String,
        required: true
    },
    departureDate: {
        type: String,
        required: true
    },
    landingDate: {
        type: String,
        required: true
    },
    className: {
        type: String,
        required: true
    },
    numberOfChildren: {
        type: Number,
        required: true
    },
    numberOfAdults: {
        type: Number,
        required: true
    }
});

const FlightBooking = mongoose.model('FlightBooking', flightBookingSchema);
module.exports = FlightBooking;