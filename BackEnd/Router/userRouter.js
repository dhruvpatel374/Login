const express = require("express");
const controler = require("../Controlers/userController.js");

const router = express.Router();

router.route("/:id").get(controler.getUserById);
router.route("/getuser").post(controler.getUser);
router.route("/createuser").post(controler.createUser);

module.exports = router;
