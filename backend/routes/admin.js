const express = require('express');
const router = express.Router();

const adminCredentials = {
    username: 'admin',
    password: 'password' // In a real application, use environment variables and hashing
};

// Admin Login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === adminCredentials.username && password === adminCredentials.password) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
