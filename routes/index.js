const router = require("express").Router();
const Todo = require("../models/Todo");

router.get("/", async (req, res) => {
  const allTodos = await Todo.find();
  res.render("index.ejs", { Todo: allTodos });
});

module.exports = router;
