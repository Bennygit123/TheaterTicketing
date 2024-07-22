import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
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
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <Link to="/admin/add-movie">Add New Movie</Link>
            <div className="movies-list">
                {movies.map(movie => (
                    <div key={movie._id} className="movie-item">
                        <img src={movie.image} alt={movie.name} />
                        <h3>{movie.name}</h3>
                        <p>Category: {movie.category}</p>
                        <p>Languages: {movie.languages.join(', ')}</p>
                        <p>Average Rating: {movie.averageRating}</p>
                        <p>Tickets Sold: {movie.ticketsSold}</p>
                        <Link to={`/admin/edit-movie/${movie._id}`}>Edit</Link>
                        <button>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;

