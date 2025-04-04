// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  movieTitle: {
    type: String,
    required: true,
  },
  theater: {
    type: String,
    required: true,
  },
  showTime: {
    type: String,
    required: true,
  },
  selectedDate: {
    type: String,
    required: true,
  },
  seats: {
    type: [String], // Array of seat identifiers
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
