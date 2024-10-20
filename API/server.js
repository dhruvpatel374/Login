const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 3001;

const DB = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD);

// making connection to our data base
mongoose
  .connect(DB)
  .then(() => {
    console.log("connection success!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log("Listening...");
});
