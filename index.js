require("dotenv").config();
const express = require("express");
const app = express();
const restaurants = require("./routes/restaurants/restaurants");
const restrauntDetails = require("./routes/restaurants/restaurantDetails");
const flights = require("./routes/flights/flights");
const flightBooking = require("./routes/flights/flightBooking");
const hotels = require("./routes/hotels/hotels");
const hotelDetails = require("./routes/hotels/hotelDetails");
const hotelBooking = require("./routes/hotels/hotelBooking");
const places = require("./routes/places/places");
const user = require("./routes/users/user");
const connectDB = require("./config/dbConnection");

connectDB();

app.use(express.json());

// Routes
app.use("/api/restaurants", restaurants);
app.use("/api/restaurantdetails", restrauntDetails);
app.use("/api/flights", flights);
app.use("/api/flightBooking", flightBooking);
app.use("/api/hotels", hotels);
app.use("/api/hoteldetails", hotelDetails);
app.use("/api/hotelbooking", hotelBooking);
app.use("/api/places", places);
app.use("/api/user", user);

// require('./startup/prod')()

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
