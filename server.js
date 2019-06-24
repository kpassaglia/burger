//require ('dotenv').config();
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var config = require('./config/config');

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_Controller.js");

app.use(routes);


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

app.route('/').get(function(request, response) {
    response.json(config);
});