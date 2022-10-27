const express = require('express');
const app = express();
const morgan = require('morgan'); // HTTP request logger middleware for node.js

/**
 * Middleware option
 * 1. custom middleware: app.use([logger, authorize])
 * 2. built-in middleware: app.use(express.static('./public')) (comes with express)
 * 3. third-party middleware: app.use(morgan('tiny'))
 */
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/api/products', (req, res) => {
    res.send('Products');
});

app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.send('Items');
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000....');
});