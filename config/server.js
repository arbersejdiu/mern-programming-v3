const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

mongoose
  .connect(process.env.URI)
  .then(() => console.log("Connected Successully"));

module.exports = app;
