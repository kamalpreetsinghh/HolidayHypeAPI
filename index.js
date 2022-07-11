const restaurants = require('./routes/restaurants')
const restrauntDetails = require('./routes/restaurantDetails')
const flights = require('./routes/flights')
const flightBooking = require('./routes/flightBooking')
const hotels = require('./routes/hotels')
const hotelDetails = require('./routes/hotelDetails')
const hotelBooking = require('./routes/hotelBooking')
const places = require('./routes/places')
const user = require('./routes/user')
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const dbURL = 'mongodb+srv://holidayhype:gbcholidayhype@holidayhype.tcgnt9i.mongodb.net/holidayhype?retryWrites=true&w=majority'
mongoose.connect(dbURL)
.then((result) => console.log('Connected to MongoDB'))
.catch((error) => console.log(error))

app.use(express.json())
app.use('/api/restaurants', restaurants)
app.use('/api/restaurantdetails', restrauntDetails)
app.use('/api/flights', flights)
app.use('/api/flightBooking', flightBooking)
app.use('/api/hotels', hotels)
app.use('/api/hoteldetails', hotelDetails)
app.use('/api/hotelbooking', hotelBooking)
app.use('/api/places', places)
app.use('/api/user', user)

// require('./startup/prod')()

app.get('/', (req, res) => {
    res.send('Hello World')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))









