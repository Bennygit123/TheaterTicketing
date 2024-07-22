import React, { useState } from 'react';
import './AddMovie.css';

const AddMovie = () => {
    const [form, setForm] = useState({
        name: '',
        image: '',
        category: '',
        languages: '',
        description: '',
        cast: '',
        reviews: '',
        ticketRates: '',
        noOfSeats: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });

        const data = await response.json();
        if (response.ok) {
            alert('Movie added successfully');
            setForm({
                name: '',
                image: '',
                category: '',
                languages: '',
                description: '',
                cast: '',
                reviews: '',
                ticketRates: '',
                noOfSeats: ''
            });
        } else {
            alert(`Failed to add movie: ${data.message}`);
        }
    };

    return (
        <div className="add-movie">
            <h2>Add Movie</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required />

                <label>Image URL:</label>
                <input type="text" name="image" value={form.image} onChange={handleChange} required />

                <label>Category:</label>
                <input type="text" name="category" value={form.category} onChange={handleChange} required />

                <label>Languages:</label>
                <input type="text" name="languages" value={form.languages} onChange={handleChange} required />

                <label>Description:</label>
                <textarea name="description" value={form.description} onChange={handleChange} required />

                <label>Cast:</label>
                <input type="text" name="cast" value={form.cast} onChange={handleChange} required />

                <label>Reviews:</label>
                <textarea name="reviews" value={form.reviews} onChange={handleChange} required />

                <label>Ticket Rates:</label>
                <input type="number" name="ticketRates" value={form.ticketRates} onChange={handleChange} required />

                <label>No of Seats:</label>
                <input type="number" name="noOfSeats" value={form.noOfSeats} onChange={handleChange} required />

                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
};

export default AddMovie;
