const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const db = require("../db/models");

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
    const shelves = shelfName.map((shelf) => shelf.dataValues.name);
    res.render("shelf", { shelves });
  })
);

module.exports = router;
