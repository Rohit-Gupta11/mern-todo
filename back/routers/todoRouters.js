const express = require('express');
const todoRouter = express.Router();

todoRouter.post('/create-todo', (req,res) => {
    let todoTitle = req.body.todotitle;
    let todoDescription = req.body.tododescription;
    let newTodo = {
        'title' : todoTitle,
        'description' : todoDescription,
    };
    try {
        console.log(newTodo);
    } catch (error) {
        console.log(error);
    }
});

module.exports = todoRouter;