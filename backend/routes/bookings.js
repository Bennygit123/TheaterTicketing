const express = require('express');
const Booking = require('../models/Booking');
const Movie = require('../models/Movie');
const router = express.Router();

// Book tickets
router.post('/', async (req, res) => {
    const booking = new Booking({
        movieId: req.body.movieId,
        userId: req.body.userId,
        seats: req.body.seats,
        status: req.body.status
    });

    try {
        const newBooking = await booking.save();
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get bookings by user ID
router.get('/user/:userId', async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.params.userId }).populate('movieId');
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
