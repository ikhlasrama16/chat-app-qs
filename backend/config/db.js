const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {});

    console.log(`mongodb connected: ${conn.connection.host}`.green.underline);
  } catch (error) {
    console.log(`connection error ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
