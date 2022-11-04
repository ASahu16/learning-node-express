/**
 * Express comes with a built-in error handler that takes care of
 * any errors that might be encountered in the app.
 * This default error-handling middleware function is added at the end
 * of the middleware function stack.
 *
 * If you pass an error to next() and you do not handle it in a error
 * handler, it will be handled by the built-in error handler;
 * the error will be written to the client with the stack trace.
 * The stack trace is not included in the production environment.
 *
 * Here we define error-handling middleware functions in the same way as
 * other middleware functions, except error-handling functions have
 * four arguments instead of three: (err, req, res, next).
 *
 * more info visit: http://expressjs.com/en/guide/error-handling.html#the-default-error-handler
 */
const errorHandlerMiddleware = (err, req, res, next) => {
  return res.status(500).json({ message: err });
};

module.exports = errorHandlerMiddleware;
