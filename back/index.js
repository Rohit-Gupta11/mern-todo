require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const todoRouter = require('./routers/todoRouters');
const authRouter = require('./routers/authRouter');
const myapp = express();

const PORT = process.env.PORT || 4000;

myapp.use(bodyParser.urlencoded({extended: true}));

myapp.use(bodyParser.json());

myapp.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
}));

myapp.use(cookieParser());

myapp.use(session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24
    }
}));

myapp.use('/todo', todoRouter);

myapp.use('/user', authRouter);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

myapp.listen(PORT, () => {
    console.log(`this app is runing at http://localhost:${PORT}`);
});