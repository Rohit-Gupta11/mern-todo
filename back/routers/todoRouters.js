const express = require('express');
const todoRouter = express.Router();

const mongoose = require('mongoose');

// creating todo schema for storing data
const todoSchema = mongoose.Schema({
    userId: String,
    title: String,
    description: String,
    date: {
        type: Date,
        default: Date.now
    }
});

// creating todo model/collection in database
const todoModel = mongoose.model('todos', todoSchema);

todoRouter.post('/create-todo', async (req,res) => {

});

todoRouter.get('/todo-list', async (req, res) => {
    
});

module.exports = todoRouter;