const express = require("express");
const controler = require("../controllers/userController");

const router = express.Router();

router.route("/signup").post(controler.signUp);
router.route("/signin").post(controler.signIn);

module.exports = router;
