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

// Add Movie (Admin Only)
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

// Edit Movie (Admin Only)
router.put('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        movie.name = req.body.name || movie.name;
        movie.image = req.body.image || movie.image;
        movie.category = req.body.category || movie.category;
        movie.languages = req.body.languages || movie.languages;
        movie.description = req.body.description || movie.description;
        movie.cast = req.body.cast || movie.cast;
        movie.reviews = req.body.reviews || movie.reviews;
        movie.ticketRates = req.body.ticketRates || movie.ticketRates;
        movie.noOfSeats = req.body.noOfSeats || movie.noOfSeats;

        const updatedMovie = await movie.save();
        res.json(updatedMovie);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete Movie (Admin Only)
router.delete('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        await movie.remove();
        res.json({ message: 'Movie deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
