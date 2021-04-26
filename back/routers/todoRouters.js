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

// create todo in db
todoRouter.post('/create-todo', async (req,res) => {
    const {userId, title, description} = req.body;
    await todoModel.create({
        userId: userId,
        title: title,
        description: description
    }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200);
        }
    })
});

// get all todo from db
todoRouter.get('/todo-list', async (req, res) => {
    const { userId } = req.query;
    await todoModel.find({userId: userId}, (err, result) => {
        res.json(result);
    });
    
});

// delete todo in db
todoRouter.delete('/todo-delete/:id', async (req, res) => {
    const {id} = req.params;
    await todoModel.deleteOne({_id: id}, (err) => {
        if(err) {
            console.log(err);
        } else {
            res.status(200);
        }
    });
});

// edit todo from db
todoRouter.put('/todo-edit', async (req,res) => {
    const {id, title, description} = req.body;
    await todoModel.findByIdAndRemove(id, {title: title, description: description});
})

module.exports = todoRouter;