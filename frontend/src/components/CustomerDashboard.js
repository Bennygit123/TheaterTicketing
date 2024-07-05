import React from 'react';
import { Link } from 'react-router-dom';
import './CustomerDashboard.css';

const movies = [
    {
        id: 1,
        name: 'Movie 1',
        image: 'path_to_image',
        category: 'UA',
        languages: ['Malayalam', 'English']
    },
    {
        id: 2,
        name: 'Movie 2',
        image: 'path_to_image',
        category: 'A',
        languages: ['Hindi', 'English']
    },
    // Add more movies as needed
];

const CustomerDashboard = () => {
    return (
        <div className="dashboard">
            <h2>Customer Dashboard</h2>
            <div className="movies-list">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-item">
                        <img src={movie.image} alt={movie.name} />
                        <h3>{movie.name}</h3>
                        <p>Category: {movie.category}</p>
                        <p>Languages: {movie.languages.join(', ')}</p>
                        <Link to={`/movie/${movie.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerDashboard;
