const Hotel = require('../models/hotel')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  Hotel.find()
    .then((result) => {
      let hotels = []
      let hotelDetails = {}

      result.forEach(hotel => {
        const { id, name, address, description, price, type, latitude, longitude, date, numberOfRooms, imageUrl } = hotel
        hotelDetails = { id, name, address, description, price, type, latitude, longitude, date, numberOfRooms, imageUrl }

        hotels.push(hotelDetails)
      });
      res.send(hotels)
    })
    .catch((error) => console.log(error))
})

router.post('/insert', (req, res) => {

        const hotelDocument = new Hotel({ name: 'Holiday Inn', address: '30 Carlton Street, M5B 2E9 Toronto, Canada', 
        description: 'This hotel is located next door to Maple Leaf Gardens in downtown Toronto. Guest rooms offer free WiFi.', 
        price: 245, type: 'Inn', latitude: '56.67', longitude: '45.78', date: new Date(), numberOfRooms: 45, 
        imageUrl: 'https://images.app.goo.gl/9nteXEtgDAMv5t9B9', phone: '877 660 8550', 
        website: 'https://www.holidayinn.com/hotels/us/en/toronto/yyzct/hoteldetail' })
    
        hotelDocument.save()

  res.send("Data Saved Successfully")

})

module.exports = router