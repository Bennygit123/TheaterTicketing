import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CustomerDashboard from './components/CustomerDashboard';
import MoviePage from './components/MoviePage';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/customer-dashboard" element={<CustomerDashboard />} />
                    <Route path="/movie/:id" element={<MoviePage />} />
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
