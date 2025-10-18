const express = require("express");
const helmet = require("helmet");
const morgan = require('morgan');
const apiRoutes = require('./routes/api');

module.exports = (dbs) => {
  const app = express();
  app.use(express.json());
  app.use(require("cors")());

  // Use Helmet in all environments for basic security
  app.use(helmet());

  // Routes
  app.use("/v1", apiRoutes);

  return app;
};
