const express = require("express");
const controler = require("../controllers/mainPageController");

const router = express.Router();

router.route("/res").get(controler.getResponse);
router.route("/menu").get(controler.getMenu);

module.exports = router;
