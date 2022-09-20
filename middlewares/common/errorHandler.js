const createError = require("http-errors");

// 404 not found handler
function notFoundhandler(req, res, next) {
  next(createError(404, "Requested content was not found!"));
}

// default error handler
function errorHandler(err, req, res, next) {}
