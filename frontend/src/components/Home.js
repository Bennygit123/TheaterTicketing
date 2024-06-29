import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>Welcome to Theatre Ticketing Application</h2>
            <p>Book your tickets for the latest movies easily and quickly!</p>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
