const express = require('express');
const todoRouter = express.Router();

const todoModel = require('../dataHandlers');

todoRouter.post('/create-todo', async (req,res) => {
    let todoTitle = req.body.todotitle;
    let todoDescription = req.body.tododescription;
    let newTodo = {
        title : todoTitle,
        description : todoDescription,
    };
    await todoModel.create(newTodo);
    res.status(200);
});

todoRouter.get('/todo-list', async (req, res) => {
    const { userId } = req.query;
    let todoList = await todoModel.find({userId : userId}).toString();
    res.json(todoList);
});

module.exports = todoRouter;