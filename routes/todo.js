const router = require("express").Router();
const Todo = require("../models/Todo");

// Create New Todo
router.post("/add/todo", (req, res) => {
  const { todo } = req.body;
  const newTodo = new Todo({ todo });
  newTodo
    .save()
    .then(() => {
      console.log("Successfully added to database");
    })
    .catch(err => consoel.log(err));
  res.redirect("/");
});
// Delete todo
router.get("/delete/todo/:_id", (req, res) => {
  const { _id } = req.params;
  Todo.deleteOne({ _id })
    .then(() => {
      console.log("Deleted Successfully");
      res.redirect("/");
    })
    .catch(err => console.log(err));
});

module.exports = router;
