const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    userId: { type: String, required: true },
    seats: { type: Number, required: true },
    status: { type: String, enum: ['Available', 'Fast Filling', 'Housefull'], default: 'Available' }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
