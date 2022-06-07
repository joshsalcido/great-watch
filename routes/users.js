const express = require("express");
const router = express.Router();
const db = require("../db/models");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const csrfProtection = require("./utils");
const asyncHandler = require("./utils");
const { loginUser, logoutUser } = require("../auth");

/* GET users listing. */
router.get("/register", function (req, res, next) {
  const user = db.User.build();
  res.render("register", { user });
});

router.get("/login", function (req, res, next) {
  res.render("login");
});

module.exports = router;
