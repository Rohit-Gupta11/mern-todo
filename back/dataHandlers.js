const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    userId : String,
    title: String,
    description: String
});

const todoModel = mongoose.model('todos', todoSchema);

module.exports = todoModel;