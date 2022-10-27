/**
 * Middleware functions for logging network request.
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

const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'admin') {
        req.user = { name: 'admin', id: 1 };
        next() //continue to the next function
    } else {
        res.status(401).send('Unauthorized index');
    }

}

module.exports = { logger, authorize }