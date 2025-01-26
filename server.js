const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('src'));

// Routes
// Landing page
app.get('/', (req, res) => {
    res.render('about'); // Render about.ejs
});

// Handle username submission
app.post('/play', async (req, res) => {
    const { username } = req.body;
    res.render('play', { username });
    return;
});

// Handle username submission
app.get('/about', async (req, res) => {
    res.render('about');
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
