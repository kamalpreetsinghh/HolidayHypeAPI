const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
