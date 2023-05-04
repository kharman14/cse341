// Lesson 1
//var express = require('express');
//var app = express();
//const port = process.env.PORT || 3000;

//app.use('/', require('./routes'));

//app.listen(port, () => {
//    console.log(`Server is running on port ${port}`);
//});

// Lesson 2
const express = require('express');
const app = express();
const mongodb = require('./db/connect');
const port = process.env.PORT || 3000;
const cors = require('cors'); // Make sure to require the cors package

app.use(cors({
  origin: ['http://localhost:8080', 'http://127.0.0.1:5500'], // Add the new origin
}));

app.use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});