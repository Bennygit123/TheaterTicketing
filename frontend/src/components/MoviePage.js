import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MoviePage.css';

const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [seats, setSeats] = useState(1);

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await fetch(`http://localhost:5000/api/movies/${id}`);
            const data = await response.json();
            setMovie(data);
        };

        fetchMovie();
    }, [id]);

    const handleBooking = async () => {
        const response = await fetch('http://localhost:5000/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                movieId: movie._id,
                userId: 'some-user-id', // Replace with actual user ID
                seats: seats,
                status: 'Available'
            })
        });

        const data = await response.json();
        alert(`Booking successful! Booking ID: ${data._id}`);
    };

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-page">
            <img src={movie.image} alt={movie.name} />
            <h2>{movie.name}</h2>
            <p>{movie.description}</p>
            <p>Category: {movie.category}</p>
            <p>Languages: {movie.languages.join(', ')}</p>
            <p>Cast: {movie.cast.join(', ')}</p>
            <p>Reviews: {movie.reviews.join(', ')}</p>
            <div>
                <label>Seats:</label>
                <input type="number" value={seats} onChange={(e) => setSeats(e.target.value)} min="1" />
                <button onClick={handleBooking}>Book Ticket</button>
            </div>
        </div>
    );
};

export default MoviePage;
