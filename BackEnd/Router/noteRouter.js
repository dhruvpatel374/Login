const express = require("express");
const controler = require("../Controlers/noteController.js");

const router = express.Router();

router
  .route("/:userId")
  .get(controler.getNotes)
  .post(controler.createNote)
  .patch(controler.updateNote)
  .delete(controler.deleteNote);

router.route("/get/:_id").get(controler.getNote);

router.route("/search/:userId").get(controler.executeQuery);

module.exports = router;
