"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todos = [];
var router = (0, express_1.Router)();
router.get('/', function (req, res, next) {
    console.log("todos");
    res.status(201).json({ todos: todos });
});
router.post('/todos', function (req, res, next) {
    var newTodo = { id: new Date().toISOString(), text: req.body.text };
    todos.push(newTodo);
    res.status(201).json({ message: "added successfully", todo: newTodo });
});
router.put('/todos:id', function (req, res, next) {
    var todoId = req.params.id;
    var todoindex = todos.findIndex(function (todo) { return todo.id === todoId; });
    todos[todoindex] = { id: todos[todoindex].id, text: req.body.text };
    res.status(201).json({ message: "successfully updated", todo: todos[todoindex] });
});
router.delete('/todos:id', function (req, res, next) {
    todos = todos.filter(function (todo) { return todo.id === req.params.id; });
    res.status(201).json({ message: "deleted successfully" });
});
exports.default = router;
