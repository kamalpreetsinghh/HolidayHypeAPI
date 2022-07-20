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
        const { id, placeName, country, placeImage, placesToVisitImages, description } = place
        placeDetails = { id, placeName, country, placeImage, placesToVisitImages, description }

        places.push(placeDetails)
      });
      res.send(places)
    })
    .catch((error) => res.status(500).send(error.message))
})

router.post('/insert', (req, res) => {
    // places.forEach(place => {
    //     let placesDocument = new Places({
    //         placeName: place.placeName,
    //         country: place.country,
    //         description: place.description,
    //         placeImage: place.placeImage,
    //         placesToVisitImages: place.placesToVisitImages
    //     })

    //     placesDocument.save()
    // })

    res.send("Data Saved Successfully")

})

module.exports = router