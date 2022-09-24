const createError = require("http-errors");

const notFoundError = (req, res, next) => {
  next(createError(404, "Not found"));
};

const errorHandler = (err, req, res, next) => {
  console.log(err);
  return res.status(err.status || 500).json({
    error: {
      status: err.status || 500,
      message: err.message,
      err: err,
    },
  });
};

module.exports = { notFoundError, errorHandler };
