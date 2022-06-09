var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // Declare and Render Logged in user
  res.render("index", { title: "WatchThis" });
});

module.exports = router;
