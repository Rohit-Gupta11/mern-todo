const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const myapp = express();
const PORT = process.env.PORT || 4000;

myapp.use(cors());

myapp.use(bodyParser.urlencoded({extended : true}));
myapp.use(bodyParser.json());

let dataRecieved = new JSON();

myapp.get('/info', (req, res) => {
    res.json({
        name : 'rohit',
        grade : 'a'
    });
});

myapp.get('/send', (req, res) => {
});



myapp.listen(PORT, () => {
    console.log(`this is working well at ${PORT} `);
});