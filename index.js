const express = require("express");
const bodyPhraser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const app = express();
MongoClient.connect('mongodb://localhost:27017', (err, db) => {

    if (err) {
        console.log('Can NOT connect to MongoDB');
        process.exit(1);
    }

    console.log('Connected to MongoDB');

});

//נוסיף מידלוור

app.use(bodyPhraser.urlencoded({ extended: true }));

//הגדרות

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req, res) => {
    console.log(req.body);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

