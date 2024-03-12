const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./config/server");
require("./models/Todo");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use(require("./routes/index"));
app.use(require("./routes/todo"));

module.exports = app;
