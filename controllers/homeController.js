//const express = require('express');
//const bodyParser = require('body-parser');
//const exphbs = require('express-handlebars');

//var app = express();
module.exports = function (app) {
    // app.use(bodyParser.urlencoded({ extended: false }));
    // app.use(bodyParser.json());

    // app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    // app.set("view engine", "handlebars");

    // var router = express.Router();

    app.get('/', (req, res) => {
        res.render("welcome")
    });
}
