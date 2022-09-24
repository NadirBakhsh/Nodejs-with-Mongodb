const path = require("path");
const express = require("express");
const enforce = require("express-sslify");
const cookieParser = require("cookie-parser");
const compression = require("compression");

const app = express();
if (process.env.NODE_ENV !== "development") {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

// Local
require("./db/mongoose");
const { notFoundError, errorHandler } = require("./middleware/errorHandlers");

app.use(cookieParser());
app.use(express.json());
app.use(compression());

// Routers
app.get('/domain', (req, res) => {
  res.send('hello domains')  
})


// Error handlers
app.use(notFoundError);
app.use(errorHandler);

module.exports = app;
