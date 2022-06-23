const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    flightNumber: {
        type: String,
        required: true
    },
    // from: {
    //     type: String,
    //     required: true
    // },
    // to: {
    //     type: String,
    //     required: true
    // },
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
    // date: {
    //     type: Date,
    //     required: true
    // },
    fare: {
        type: Number,
        required: true
    },
    stops: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const Flight = mongoose.model('Flight', flightSchema)
module.exports = Flight

