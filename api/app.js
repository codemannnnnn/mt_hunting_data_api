//import required packages
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");

//import required router files
const example = require("./example/exampleRouter");
const hd2019 = require("./2019/hdRouter");

//define app
const app = express();

//middleware
app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

//define routes linking with imported files
app.use("/example", example);
app.use("/hd2019", hd2019);

//test api route
app.get("/", (req, res) => {
  res.json("Hello from the app.js file!");
});

module.exports = app;
