const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
const authRouter = require('./routes/auth');
const moviesRouter = require('./routes/movies');
const bookingsRouter = require('./routes/bookings');
const adminRouter = require('./routes/admin');

app.use('/api/auth', authRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/admin', adminRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
