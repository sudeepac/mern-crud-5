var Todo = require("../models/todo");

//Get todo

exports.get_todos = (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
};

//Get todo

exports.get_todo = (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    res.json(todo);
  });
};

//Create todo

exports.create_todo = (req, res) => {
  const todo = new Todo(req.body);
  todo
    .save()
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

//Update todo

exports.update_todo = (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if (!todo) {
      res.status(404).send("Todo not found");
    } else {
      todo.title = req.body.title;
      todo.description = req.body.description;
      todo.status = req.body.status;

      todo
        .save()
        .then((todo) => {
          res.json(todo);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
};

//Delete todo

exports.delete_todo = (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if (!todo) {
      res.status(404).send("Todo not found");
    } else {
      todo
        .remove()
        .then(() => {
          res.json({ success: "deleted" });
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
};
