const express = require('express');
const router = express.Router();
const db = require('../db/models');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require("express-validator");
const csrfProtection = require('./utils');
const asyncHandler = require('./utils');
const { loginUser, logoutUser } = require('../auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
