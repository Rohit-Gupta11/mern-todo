const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRouter = require('./routers/todoRouters');
const authRouter = require('./routers/authRouter');
const myapp = express();

const PORT = process.env.PORT || 4000;

myapp.use(bodyParser.urlencoded({extended: false}));

myapp.use(bodyParser.json());

myapp.use(cors());

myapp.use('/todo', todoRouter);

myapp.use('/user', authRouter);

mongoose.connect("mongodb+srv://adminme:xatKUcuLcX9Hkp7k@cluster0.5g27e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })

myapp.listen(PORT, () => {
    console.log(`this app is runing at http://localhost:${PORT}`);
});