const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { asyncHandler, csrfProtection } = require("./utils");
const { restoreUser, requireAuth } = require('../auth');
const { Router } = require("express");

router.get(
  "/movies",
  asyncHandler(async (req, res) => {
    const movies = await db.Movie.findAll();
    // Query for and Render Shelves
    res.render("movies", { movies });
  })
);

router.get(
  "/movies/:id(\\d+)",
  csrfProtection,
  asyncHandler(async (req, res) => {
    let loggedInUser
    if (req.session.auth) {
      loggedInUser = req.session.auth.userId
    }
    const movieId = parseInt(req.params.id, 10);
    const movies = await db.Movie.findByPk(movieId, { include: db.Review });
    // Query for Shelves
    const userReviews = movies.Reviews.map((movie) => movie.dataValues);
    const ratings = movies.Reviews.map((movie) => movie.dataValues.rating);
    const shelves = await db.Shelf.findAll({ where: { userId: loggedInUser } })

    let avg;
    if (!ratings.length) {
      avg = 'There are no ratings yet! Be the first!'
    } else {
      avg = ratings.reduce((a, b) => a + b) / ratings.length;
    }
    // Render shelves
    res.render("movie-page", { movies, loggedInUser, movieId, userReviews, avg, shelves, csrfToken: req.csrfToken() });
  })
);

router.delete('/review/:id(\\d+)', asyncHandler(async (req, res) => {
  const review = await db.Review.findByPk(req.params.id)
  if (review) {
    await review.destroy()
    res.status(200).json({ message: "Delete successful!" })
  } else {
    res.status(400).json({ message: "It didn't work :(" })
  }
}));

router.put('/review/:id(\\d+)', asyncHandler(async (req, res) => {
  const review = await db.Review.findByPk(req.params.id)
  review.reviewBody = req.body.reviewBody;
  review.rating = req.body.rating;
  await review.save()
  res.json({ message: 'Successful Edit!', review });
}))

router.post("/movies/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const movieId = parseInt(req.params.id, 10);

    const {
      rating,
      reviewBody,
    } = req.body
    const review = await db.Review.create({
      rating: +rating,
      reviewBody,
      movieId: movieId,
      userId: req.session.auth.userId
    });
    res.redirect(`/movies/${movieId}`);
  }));

router.post("/shelves/:id(\\d+)", asyncHandler(async (req, res) => {
  const shelfId = parseInt(req.params.id, 10)


  // const movieShelf = await db.MovieShelf.create({
  //   shelfId: shelfId,
  //   movieId:
  // })
  res.redirect(`/shelves/${shelfId}`)
}))

module.exports = router;
