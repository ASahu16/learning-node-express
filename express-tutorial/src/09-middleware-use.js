const express = require('express');
const app = express();
const { logger, authorize } = require('./public/middleware');

/**
 * app.use([path,] callback [, callback...])
 * 
 * Mounts the specified middleware function or functions at the specified path: 
 * the middleware function is executed when the base of the requested path matches path.
 * 
 * more info: https://expressjs.com/en/4x/api.html#app.use
 */
app.use([logger, authorize]);
// Note: if we write app.use(...) after handling any request,
// say after the app.get(...) methods then the middleware callback methods willn ot be called,
// because express run code line by line.

// Eg using path: api.use('/api',logger)
// If we run the above code, the logger will be called only on request
// whose base url starts with /api

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