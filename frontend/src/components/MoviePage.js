import React from 'react';
import { useParams } from 'react-router-dom';
import './MoviePage.css';

const movies = [
    {
        id: 1,
        name: 'Movie 1',
        image: 'path_to_image',
        category: 'UA',
        languages: ['Malayalam', 'English'],
        description: 'Description of Movie 1',
        cast: ['Actor 1', 'Actor 2'],
        reviews: ['Review 1', 'Review 2']
    },
    {
        id: 2,
        name: 'Movie 2',
        image: 'path_to_image',
        category: 'A',
        languages: ['Hindi', 'English'],
        description: 'Description of Movie 2',
        cast: ['Actor 3', 'Actor 4'],
        reviews: ['Review 3', 'Review 4']
    },
    // Add more movies as needed
];

const MoviePage = () => {
    const { id } = useParams();
    const movie = movies.find(movie => movie.id === parseInt(id));

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div className="movie-page">
            <h2>{movie.name}</h2>
            <img src={movie.image} alt={movie.name} />
            <p><strong>Category:</strong> {movie.category}</p>
            <p><strong>Languages:</strong> {movie.languages.join(', ')}</p>
            <p><strong>Description:</strong> {movie.description}</p>
            <p><strong>Cast:</strong> {movie.cast.join(', ')}</p>
            <div className="reviews">
                <h3>Reviews</h3>
                {movie.reviews.map((review, index) => (
                    <p key={index}>{review}</p>
                ))}
            </div>
            <button>Book Ticket</button>
        </div>
    );
};

export default MoviePage;
