const todo_controller = require("../controllers/todoController");

var express = require("express");

var router = express.Router();

router.get("/", todo_controller.get_todos);

router.get("/:id", todo_controller.get_todo);

router.post("/", todo_controller.create_todo);

router.put("/:id", todo_controller.update_todo);

router.delete("/:id", todo_controller.delete_todo);

module.exports = router;
