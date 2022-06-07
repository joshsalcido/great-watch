var express = require('express');
var router = express.Router();
const db = require('../db/models');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require("express-validator");
const csrfProtection = require('./utils');
const asyncHandler = require('./utils');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
