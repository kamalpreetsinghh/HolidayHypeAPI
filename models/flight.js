const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    departureTiming: {
        type: Date,
        required: true
    },
    landingTiming: {
        type: Date,
        required: true
    },
    totalTiming: {
        type: Date,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    fare: {
        type: Number,
        required: true
    },
    type: {
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

