const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const myapp = express();
const PORT = process.env.PORT || 4000;

myapp.use(bodyParser.urlencoded({extended: false}));

myapp.use(bodyParser.json());

myapp.use(cors());

myapp.listen(PORT, () => {
    console.log(`this app is runing at http://localhost:${PORT}`);
});