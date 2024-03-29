const Hotel = require("../models/hotel");
const HotelBooking = require("../models/hotelBooking");
const pdfService = require("../services/pdf-service");
const emailService = require("../services/email-service");

const getHotels = async (req, res) => {
  try {
    const result = await Hotel.find();
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const saveHotel = async (req, res) => {
  const hotelDocument = new Hotel(req.body);
  try {
    const result = await hotelDocument.save();
    res.send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getHotelByID = async (req, res) => {
  try {
    const result = await Hotel.findById(req.params.id);

    if (result) {
      res.send(result);
    } else {
      res.status(404).send({
        success: false,
        message: "The hotel with the give id was not found.",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getHotelBookingByID = async (req, res) => {
  try {
    const result = await HotelBooking.findById(req.params.id);

    if (result) {
      res.send(result);
    } else {
      res
        .status(404)
        .send({
          success: false,
          message: "The hotel booking with the given id was not found",
        });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const saveHotelBooking = async (req, res) => {
  const hotelBookingDocument = new HotelBooking(req.body);

  try {
    const result = await hotelBookingDocument.save();
    res.send(result);

    const result2 = await Hotel.findByIdAndUpdate(
      req.body.hotelID,
      { numberOfRooms: req.body.numberOfHotelRooms },
      { runValidators: true }
    );
    if (result2) {
      const doc = await pdfService.buildHotelPDF(
        result2,
        req.body.name,
        req.body.guestName,
        req.body.numberOfRooms
      );

      emailService.sendEmail(doc, req.body.email, "Hotel");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const updateHotelBooking = async (req, res) => {
  try {
    const result = await HotelBooking.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

const deleteHotelBooking = async (req, res) => {
  try {
    const result = await HotelBooking.deleteOne(req.params);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const getHotelsByUserID = async (req, res) => {
  try {
    const result = await HotelBooking.find(req.params).populate(
      "hotelID",
      "_id imageUrl"
    );

    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getHotels,
  saveHotel,
  getHotelByID,
  getHotelBookingByID,
  saveHotelBooking,
  updateHotelBooking,
  deleteHotelBooking,
  getHotelsByUserID,
};
