const express = require("express");
const bodyParser = require("body-parser");
const clientRouete = require('./routes/clients');
const shopRoute = require('./routes/shops');
const productRoute = require('./routes/products');
const areaRoute = require('./routes/areas');
const shopOwnerRoute = require('./routes/shopOwner');

const app = express();

//Parsing all incoming data to be in json objects forms 
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

// 'Get Post || Delete || Get || Put' from /clients
app.use('/clients', clientRouete);

// 'Get Post || Delete || Get || Put' from /shops
app.use('/shops', shopRoute);

// 'Get Post || Delete || Get || Put' from /products
app.use('/products', productRoute);

// 'Get Post || Delete || Get || Put' from /areas
app.use('/areas', areaRoute);

// 'Get Post || Delete || Get || Put' from /shopOwners
app.use('/shopOwners', shopOwnerRoute);

module.exports = app;
