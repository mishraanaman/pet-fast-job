const express = require('express');
const moviesRouter = require("../routes/movies/movie.router");
const api = express.Router();

// GET /api/search?q=...
api.use("/movies", moviesRouter);

module.exports = api;