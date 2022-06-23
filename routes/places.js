const Places = require('../models/places')
const places = require('../data/places')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  Places.find()
    .then((result) => {
      let places = []
      let placeDetails = {}

      result.forEach(place => {
        const { placeName, country, placeImage, placesToVisitImages, description } = place
        placeDetails = { placeName, country, placeImage, placesToVisitImages, description }

        places.push(placeDetails)
      });
      res.send(places)
    })
    .catch((error) => console.log(error))
})

router.post('/insert', (req, res) => {


    places.forEach(place => {
        let placesDocument = new Places({
            placeName: place.placeName,
            country: place.Country,
            description: place.description,
            placeImage: place.placeImage,
            placesToVisitImages: place.placesToVisitImages
        })

        console.log(place)

        placesDocument.save()
    })

    res.send("Data Saved Successfully")

})

module.exports = router