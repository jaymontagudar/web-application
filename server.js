const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Optional, but good practice

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Import and use routes
const itemsRoutes = require('./routes/items'); // Ensure this path is correct
app.use(itemsRoutes);

// Define a route for the root path
app.get('/', (req, res) => {
    res.redirect('/items');  // Redirect to /items
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
