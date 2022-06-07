const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { asyncHandler } = require('./utils');
// const { restoreUser, requireAuth } = require('../auth');

router.get('/movies', asyncHandler(async (req, res) => {
  const movies = await db.Movie.findAll();
  res.render('movies', { movies });
}));

router.get('/movies/:id(\\d+)', asyncHandler(async (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const movie = await db.Movie.findByPk(movieId);
  res.render('movie-page', { movie });
}));

module.exports = router;
