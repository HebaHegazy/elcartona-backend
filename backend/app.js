const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./routes/users");
const shopRoute = require("./routes/shops");
const productRoute = require("./routes/products");
const app = express();
var accepts = require("accepts");

//Parsing all incoming data to be in json objects forms
app.use(bodyParser.json()); //application/json
app.use(bodyParser.urlencoded({ extended: false }));

//Handling requests from diff. ports to solve CORS Problems
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, application/json; charset=utf-8"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
// 'Get Post || Delete || Get || Put' from /users
app.use("/users", userRoute);

// 'Get Post || Delete || Get || Put' from /shops
app.use("/shops", shopRoute);

// 'Get Post || Delete || Get || Put' from /products
app.use("/products", productRoute);

module.exports = app;
