const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placesSchema = new Schema({
    placeName: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    placeImage: {
        type: String,
        required: true
    },
    placesToVisitImages: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Places = mongoose.model('Place', placesSchema)
module.exports = Places

