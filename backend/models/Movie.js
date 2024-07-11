const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    languages: [String],
    description: String,
    cast: [String],
    reviews: [String],
    ticketRates: Number,
    noOfSeats: Number
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
