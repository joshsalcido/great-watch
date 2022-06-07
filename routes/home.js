var express = require("express");
var router = express.Router();
const { restoreUser, requireAuth } = require("../auth")

router.get("/home", restoreUser, requireAuth, (req, res) => {
  res.render("home")
})

module.exports = router
