const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const moviesRouter = require('./routes/movies');
const bookingsRouter = require('./routes/bookings');

app.use('/api/movies', moviesRouter);
app.use('/api/bookings', bookingsRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
