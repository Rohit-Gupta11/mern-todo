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

myapp.use(bodyParser.urlencoded({ extended: true }));

myapp.use(bodyParser.json());

myapp.use(cors({
    origin: process.env.ORIGIN,
    methods: ["GET", "POST", "DELETE"],
    credentials: true
}));

myapp.use(cookieParser());

myapp.use(session({
    key: "userId",
    secret: "subscribe",
    resave: true,
    saveUninitialized: false,
    cookie: {
        expires: 6000 * 60 * 24,
        sameSite: "none"
    }
}));

myapp.use('/todo', todoRouter);

myapp.use('/user', authRouter);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

myapp.listen(PORT, () => {
    console.log(`this app is runing at http://localhost:${PORT}`);
});