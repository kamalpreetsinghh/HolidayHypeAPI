const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hotelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    numberOfRooms: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    }
})

const Hotel = mongoose.model('Hotel', hotelSchema)
module.exports = Hotel

