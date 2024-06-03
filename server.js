const express = require("express");

const app = express();
const db = require("./database.js");
const foodroutes = require("./routes/foodroutes.js");
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use("/", foodroutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
