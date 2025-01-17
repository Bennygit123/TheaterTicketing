import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CustomerDashboard.css';

const CustomerDashboard = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('http://localhost:5000/api/movies');
            const data = await response.json();
            setMovies(data);
        };

        fetchMovies();
    }, []);

    return (
        <div className="dashboard">
            <h2>Customer Dashboard</h2>
            <div className="movies-list">
                {movies.map(movie => (
                    <div key={movie._id} className="movie-item">
                        <img src={movie.image} alt={movie.name} />
                        <h3>{movie.name}</h3>
                        <p>Category: {movie.category}</p>
                        <p>Languages: {movie.languages.join(', ')}</p>
                        <Link to={`/movie/${movie._id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerDashboard;
