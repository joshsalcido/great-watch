var express = require("express");
var router = express.Router();
const { restoreUser, requireAuth } = require("../auth");
const db = require("../db/models");

router.get("/home", restoreUser, requireAuth, async (req, res) => {
  const userId = req.session.auth.userId;
  const user = await db.User.findOne({
    where: {
      id: userId,
    },
  });
  res.render("home", { user });
});

module.exports = router;
