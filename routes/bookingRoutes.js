// routes/bookingRoutes.js
const express = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

// Route to create a new booking
router.post('/', async (req, res) => {
  const { movieTitle, theater, showTime, selectedDate, seats, totalPrice } = req.body;

  try {
    const newBooking = new Booking({
      movieTitle,
      theater,
      showTime,
      selectedDate,
      seats,
      totalPrice,
    });

    await newBooking.save();

    return res.status(201).json({
      message: 'Booking created successfully!',
      booking: newBooking,
    });
  } catch (error) {
    console.error('Error saving booking:', error); // Log the error
    return res.status(500).json({
      message: 'Failed to create booking.',
      error: error.message,
    });
  }
});


// Route to get all bookings (optional)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    return res.status(200).json(bookings);
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to retrieve bookings.',
      error: error.message,
    });
  }
});

module.exports = router;
