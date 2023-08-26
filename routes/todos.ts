import { Router } from "express";

import { Todo } from "../models/todos";

let todos: Todo[] = [];

const router = Router();

router.get('/', (req, res, next)=>{

    console.log("todos");

    res.status(201).json({todos: todos});
});

router.post('/todos', (req, res, next)=>{
    

    const newTodo: Todo = {id: new Date().toISOString(), text: req.body.text};

    todos.push(newTodo);

    res.status(201).json({message: "added successfully", todo: newTodo});
});

router.put('/todos/:id', (req, res, next)=>{

    const todoId = req.params.id;

    console.log(todoId + " id is here");

    const todoindex = todos.findIndex((todo)=> todo.id === todoId);

    todos[todoindex] = { id: todos[todoindex].id, text: req.body.text};

    res.status(201).json({message: "successfully updated", todo: todos[todoindex]});
});

router.delete('/todos/:id', (req, res, next)=>{

    todos =  todos.filter(todo=> todo.id !== req.params.id);

    res.status(201).json({message: "deleted successfully"});
})

export default router;