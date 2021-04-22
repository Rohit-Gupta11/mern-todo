const express = require('express');
const authRouter = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
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
            });

        });

        res.status(200);
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
                    res.send(result);
                } else {
                    res.send({ message: "Wrong username/password combination" });
                }
            });
        } else {
            res.send({ message: "Username doesn't exist" });
        }
    });
});

module.exports = authRouter;