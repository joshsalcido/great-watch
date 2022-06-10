const express = require("express");
const router = express.Router();
const db = require("../db/models");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const { csrfProtection, asyncHandler } = require("./utils");
const { loginUser, logoutUser } = require("../auth");

/* GET users listing. */
router.get("/register", csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render("register", {
    title: "Sign Up",
    user,
    csrfToken: req.csrfToken(),
  });
});

const userValidators = [
  check("firstName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for First Name")
    .isLength({ max: 100 })
    .withMessage("First Name must not be more than 100 characters long."),
  check("lastName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Last Name")
    .isLength({ max: 100 })
    .withMessage("Last Name must not be more than 100 characters long."),
  check("userName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Username")
    .isLength({ max: 50 })
    .withMessage("Username must not be more than 50 characters long."),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Email Address")
    .isLength({ max: 255 })
    .withMessage("Email address must not be more than 255 characters long.")
    .isEmail()
    .withMessage("Email address is not a valid email")
    .custom((value) => {
      return db.User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject("The provided Email Address is already in use");
        }
      });
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Password")
    .isLength({ max: 50 })
    .withMessage("Password must not be more than 50 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage(
      'Password must contain at least 1 lowercase letter, 1 uppercase letter, a number, and a special character (i.e. "!@#$%^&*)'
    ),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Confirm Password")
    .isLength({ max: 50 })
    .withMessage("Confirm Password must not be more than 50 characters long")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Confirm Password does not match Password");
      }
      return true;
    }),
];

router.post(
  "/register",
  csrfProtection,
  userValidators,
  asyncHandler(async (req, res) => {
    const { firstName, lastName, userName, email, password } = req.body;
    const user = db.User.build({
      firstName,
      lastName,
      userName,
      email,
    });
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      res.redirect("/");
      console.log(firstName, lastName, userName, email, password);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("register", {
        title: "Sign Up",
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

router.get("/login", csrfProtection, (req, res) => {
  res.render("login", { title: "Login", csrfToken: req.csrfToken() });
});

const loginValidators = [
  check("userName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Username"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Password"),
];

router.post(
  "/login",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    // console.log("Here");
    const { userName, password } = req.body;
    let errors = [];
    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      const user = await db.User.findOne({
        where: { userName },
      });
      if (user !== null) {
        const passwordMatched = await bcrypt.compare(
          password,
          user.password.toString()
        );
        if (passwordMatched) {
          loginUser(req, res, user);
          return res.redirect("home");
        }
      }
      errors.push("Login failed for the provided Username and Password");
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }
    res.render("login", {
      title: "Login",
      userName,
      errors,
      csrfToken: req.csrfToken(),
    });
  })
);

router.post("/logout", (req, res) => {
  logoutUser(req, res);
  res.redirect("/");
});

router.post(
  "/login/demo",
  asyncHandler(async (req, res) => {
    const demoUser = await db.User.findOne({
      where: {
        id: 2,
      },
    });
    loginUser(req, res, demoUser);
    return res.redirect("/home");
    // return res.redirect("home")
  })
);

module.exports = router;
