const asyncWrapper = (callback) => {
  // Note: from express we get the request, response, next object
  // which we pass on the the function we get as a callback.
  //
  // In simple words now we made code base more generic,
  // by handling the error for the request as a middle functions
  // request comes in the asyncWrapper function,
  // then pass on the the controller function(passed as callback here)

  // So, when a there is a error in the callback function it gets handled here,
  // If you are familiar with java, its just like using the `throws` keywords
  // outside the function
  return async (req, res, next) => {
    try {
      await callback(req, res, next);
    } catch (error) {
      /**
       * If you pass an error to next() and you do not handle it in a error
       * handler, it will be handled by the built-in error handler.
       */
      next(error);
    }
  };
};

module.exports = asyncWrapper;
