const express = require("express");
const app = express();
const cors = require("cors");

const userRouter = require("./Router/userRouter");
const noteRouter = require("./Router/noteRouter");

app.use(cors());
app.use(express.json());
app.use("/note-app/v1/user", userRouter);
app.use("/note-app/v1/notes", noteRouter);

app.all("/", (req, res) => {
  res.status(404).json({ message: "bad request from client" });
});

module.exports = app;
