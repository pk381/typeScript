"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    console.log("todos");
    res.status(201).json({ todos: todos });
});
router.post('/todos', (req, res, next) => {
    const newTodo = { id: new Date().toISOString(), text: req.body.text };
    todos.push(newTodo);
    res.status(201).json({ message: "added successfully", todo: newTodo });
});
router.put('/todos/:id', (req, res, next) => {
    const todoId = req.params.id;
    console.log(todoId + " id is here");
    const todoindex = todos.findIndex((todo) => todo.id === todoId);
    todos[todoindex] = { id: todos[todoindex].id, text: req.body.text };
    res.status(201).json({ message: "successfully updated", todo: todos[todoindex] });
});
router.delete('/todos/:id', (req, res, next) => {
    todos = todos.filter(todo => todo.id !== req.params.id);
    res.status(201).json({ message: "deleted successfully" });
});
exports.default = router;
