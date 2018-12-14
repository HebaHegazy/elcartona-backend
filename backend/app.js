const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require('mongoose');
const clientRouete = require('./routes/clients');

const app = express();
// mongoose.connect('mongodb://localhost/.....')
//   .then(() => console.log('Connected to MongoDB...'))
//   .catch(err => console.error('Could not connect to MongoDB...'));

//Parsing all incoming data to be in json objects forms 
// app.use(express.json());
app.use(bodyParser.json()); //application/json
app.use(bodyParser.urlencoded({ extended: false }));


//Handling requests from diff. ports to solve CORS Problems
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// Get 'Post || Delete || Get || Put' from /clients
app.use('/clients', clientRouete);

module.exports = app;
