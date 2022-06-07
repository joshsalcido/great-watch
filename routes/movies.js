const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { asyncHandler } = require("./utils");
// const { restoreUser, requireAuth } = require('../auth');

router.get(
  "/movies",
  asyncHandler(async (req, res) => {
    const movies = await db.Movie.findAll();
    res.render("movies", { movies });
  })
);

router.get(
  "/movies/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const movieId = parseInt(req.params.id, 10);
    const movies = await db.Movie.findByPk(movieId, { include: db.Review });
    const reviews = movies.Reviews.map((movie) => movie.dataValues.reviewBody);

    const ratings = movies.Reviews.map((movie) => movie.dataValues.rating);

    // const average = (rating) => {
    //   let sum = 0;
    //   for (let i = 0; i < rating.length; i++) {
    //     sum += rating[i];
    //   }
    //   return sum / rating.length;
    // };

    const avg = ratings.reduce((a, b) => a + b) / ratings.length;

    console.log(avg);
    res.render("movie-page", { movies, reviews, avg });
  })
);

module.exports = router;
