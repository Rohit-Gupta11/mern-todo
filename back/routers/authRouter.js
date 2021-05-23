const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const session = require('express-session');
const authRouter = express.Router();
const saltRounds = 10;

// creating user schema for storing data
const userSchema = mongoose.Schema({
    username: String,
    password: String
});

// creating user model/collection in database
const userModel = mongoose.model('user', userSchema);

authRouter.post('/register', async (req, res) => {
    const { username, password } = req.body;

    let exUser = await userModel.findOne({ username: username });
    if (exUser) {
        res.json({
            message: "Username already exist"
        })
    } else {
        // write code for register user in db
        bcrypt.hash(password, saltRounds, async (err, hash) => {

            if (err) {
                console.log(err);
            }

            await userModel.create({
                username: username,
                password: hash
            }, (err, result) => {
                req.session.user = result;
                res.status(200).json({
                    message: "Username registered"
                });
            });

        });

    }
});

authRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // write code for finding user in db
    await userModel.findOne({ username: username }, (err, result) => {

        if (err) {
            res.send({ err: err });
        }

        if (result) {
            bcrypt.compare(password, result.password, (err, response) => {
                if (response) {
                    req.session.user = result;
                    res.status(200).json({
                        message: "Username logined"
                    });
                } else {
                    res.json({ message: "Wrong username/password combination" });
                }
            });
        } else {
            res.json({ message: "Username doesn't exist" });
        }
    });
});

authRouter.get('/login', (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});

authRouter.delete('/login', (req,res) => {
    req.session.user = null;
    res.send(200);
})

module.exports = authRouter;