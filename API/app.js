const express = require("express");
const mainPageRouter = require("./routers/mainPageRouter");
const userRouter = require("./routers/userRouter");
const cors = require("cors");

// express() method gives server instance
const app = express();

// this express.json() is the middleware which is used to use req.body
// note: we can not get req.body directly in node so, we need to use middleware for that
app.use(express.json());

app.use(cors());

app.use("/api", mainPageRouter);
app.use("/api/user", userRouter);

app.all("/", (req, res) => {
  res.send(
    "<h1>For Swiggy Restaurant Card api go to /api/res and For menu api api/menu and add restaurantid </h1>"
  );
});

module.exports = app;
