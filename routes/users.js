const express = require("express");
const router = express.Router();
const db = require("../db/models");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const {csrfProtection, asyncHandler} = require("./utils");
// const asyncHandler = require("./utils");
const { loginUser, logoutUser } = require("../auth");

/* GET users listing. */
router.get("/register", csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render("register", { title: "Sign Up", user, csrfToken: req.csrfToken()});
});

const userValidators = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for First Name')
    .isLength({ max: 100 })
    .withMessage('First Name must not be more than 100 characters long.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Last Name')
    .isLength({ max: 100 })
    .withMessage('Last Name must not be more than 100 characters long.'),
  check('userName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Username')
    .isLength({ max: 50 })
    .withMessage('Username must not be more than 50 characters long.'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email address must not be more than 255 characters long.')
    .isEmail()
    .withMessage('Email address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use')
          };
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, 1 uppercase letter, a number, and a special character (i.e. "!@#$%^&*)'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      };
      return true;
    }),
];

router.post("/register", csrfProtection, userValidators, asyncHandler(async(req, res) => {
  const { firstName, lastName, userName, email, password } = req.body
  const user = db.User.build({
    firstName,
    lastName,
    userName,
    email
  })
  const validatorErrors = validationResult(req)
  if(validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10)
    user.password = hashedPassword
    await user.save()
    loginUser(req, res, user)
    res.redirect("/")
    console.log(firstName, lastName, userName, email, password)
  } else {
    const errors = validatorErrors.array().map(error => error.msg)
    res.render("register", {title: "Sign Up", user, errors, csrfToken: req.csrfToken()})
  }
}))

// router.get("/login", function (req, res, next) {
//   res.render("login");
// });

module.exports = router;
