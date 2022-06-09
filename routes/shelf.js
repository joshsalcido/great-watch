const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const db = require("../db/models");
const { route } = require("./movies");

router.post(
  "/shelves",
  asyncHandler(async (req, res) => {
    const { name } = req.body;
    const shelf = await db.Shelf.create({
      name,
      userId: req.session.auth.userId,
    });
    res.redirect("/shelves");
  })
);

router.get(
  "/shelves",
  asyncHandler(async (req, res) => {
    const user = await db.User.findByPk(req.session.auth.userId, {
      include: db.Shelf,
    });
    const shelfName = user.Shelves;
    const shelves = shelfName.map((shelf) => shelf.dataValues);
    res.render("shelf", { shelves });
  })
);

router.get(
  "/shelves/:id(\\d+)",
  csrfProtection,
  asyncHandler(async (req, res) => {
    let loggedInUser
    if (req.session.auth) {
      loggedInUser = req.session.auth.userId
    }
    const shelfId = parseInt(req.params.id, 10);
    const shelves = await db.Shelf.findByPk(shelfId, { include: { model: db.Movie, include: db.Review } });
    // Query for Shelves
    // const userReviews = movies.Reviews.map((movie) => movie.dataValues);
    // const ratings = movies.Reviews.map((movie) => movie.dataValues.rating);
    const mo = shelves.dataValues.Movies.map((movie) => movie.dataValues.Reviews);
    const reviews = mo.map((review) => review.map((reviewData) => reviewData.dataValues)).flat();
    const movies = shelves.dataValues.Movies.map((movie) => movie.dataValues);
    //console.log(movies);
    // Render shelves
    res.render("shelf-page", { shelves, reviews, movies, loggedInUser, shelfId, csrfToken: req.csrfToken() });
  })
);

router.delete('/shelves/:id(\\d+)', asyncHandler(async (req, res) => {
  const shelf = await db.Shelf.findByPk(req.params.id)
  if (shelf) {
    await shelf.destroy();
    res.status(200).json({ message: "Delete successful!" });
  } else {
    res.status(400).json({ message: "Unsuccessful" });
  };
}));

module.exports = router;
