import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CustomerDashboard from './components/CustomerDashboard';
import MoviePage from './components/MoviePage';
import './App.css'; // Import the CSS file

function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    <h1>Theatre Ticketing Application</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">SignUp</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/dashboard" element={<CustomerDashboard />} />
                        <Route path="/movie/:id" element={<MoviePage />} />
                    </Routes>
                </main>
                <footer>
                    <p>&copy; 2024 Theatre Ticketing Application</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
