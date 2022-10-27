const express = require('express')
const app = express()

/**
 * Middleware functions are functions that have access to the request object (req), 
 * the response object (res), 
 * and the next function in the application’s request-response cycle. 
 * 
 * The next function is a function in the Express router which, when invoked, 
 * executes the middleware succeeding the current middleware.
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {*} next 
 */
//  req => middleware => res

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}

app.get('/', logger, (req, res) => {
    res.send('Home');
})
app.get('/about', logger, (req, res) => {
    res.send('About');
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....');
})