const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    id: Number,
    title: String,
    description: [String]
})