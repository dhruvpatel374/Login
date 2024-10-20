const app = require("./app.js");
const dotenv = require("dotenv");
const mongoos = require("mongoose");

dotenv.config({ path: "./config.env" });

const DB_URL = process.env.DB_URL.replace(
  "<password>",
  process.env.DB_PASSWORD
);

mongoos
  .connect(DB_URL)
  .then(() => {
    console.log("connection success by MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT_NUMBER || 8085;

app.listen(port, () => {
  console.log("listening by backEnd...");
});
