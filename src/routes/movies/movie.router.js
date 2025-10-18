const express = require("express");
const { searchMovies } = require("./movie.controller");
const { checkToken } = require("../login/login.controller");
const router = express.Router();

// GET /api/movies/search?q=...
router.get("/search", searchMovies);

module.exports = router;
