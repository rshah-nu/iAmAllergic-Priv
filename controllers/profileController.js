// const express = require('express');
// const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');

// var app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// var router = express.Router();
module.exports = function(app){
    app.get('/profile', (req, res) => {
        res.render("profile");
    });

    app.get('/foodsearch', (req, res) => {
        // CALL TO API AND CALLBACK W/ RESULTS TO MODAL
    });
}
