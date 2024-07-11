const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

// Get all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get movie by ID
router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.json(movie);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add new movie (Admin functionality)
router.post('/', async (req, res) => {
    const movie = new Movie({
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        languages: req.body.languages,
        description: req.body.description,
        cast: req.body.cast,
        reviews: req.body.reviews,
        ticketRates: req.body.ticketRates,
        noOfSeats: req.body.noOfSeats
    });

    try {
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
