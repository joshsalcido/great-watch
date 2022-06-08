const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { asyncHandler, csrfProtection } = require("./utils");
const { restoreUser, requireAuth } = require('../auth');

router.get(
  "/movies",
  asyncHandler(async (req, res) => {
    const movies = await db.Movie.findAll();
    res.render("movies", { movies });
  })
);

router.get(
  "/movies/:id(\\d+)",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const movieId = parseInt(req.params.id, 10);
    const movies = await db.Movie.findByPk(movieId, { include: db.Review });
    // const reviews = await db.Review.findAll({ include: db.User });
    const userReviews = movies.Reviews.map((movie) => movie.dataValues.reviewBody);
    const ratings = movies.Reviews.map((movie) => movie.dataValues.rating);
    let avg;
    if (!ratings.length) {
      avg = 'There are no ratings yet! Be the first!'
    } else {
      avg = ratings.reduce((a, b) => a + b) / ratings.length;
    }
    // console.log(reviews.map((review) => review.User.dataValues.userName));
    res.render("movie-page", { movies, movieId, userReviews, avg, csrfToken: req.csrfToken() });
  })
);

router.post("/movies/:id(\\d+)",
  // restoreUser,
  // requireAuth,
  // csrfProtection,
  asyncHandler(async (req, res) => {
    const movieId = parseInt(req.params.id, 10);
    console.log(req.body)
    const {
      rating,
      reviewBody,
    } = req.body
    // console.log();
    const review = await db.Review.create({
      rating: +rating,
      reviewBody,
      movieId: movieId,
      userId: req.session.auth.userId
    });
    console.log(review);
    res.redirect(`/movies/${movieId}`);
  }));

module.exports = router;
