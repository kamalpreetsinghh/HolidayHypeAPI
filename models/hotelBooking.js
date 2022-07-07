const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hotelBookingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    guestName: {
        type: Number,
        required: true
    },
    numberOfRooms: {
        type: Number,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    hotelID: {
        type: String,
        required: true
    },
    hotelName: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    }
})

const HotelBooking = mongoose.model('HotelBooking', hotelBookingSchema)
module.exports = HotelBooking

