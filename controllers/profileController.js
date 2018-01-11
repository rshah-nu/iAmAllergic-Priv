const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = express.Router();

router.get('/profile', (req, res) => {
    profile.all((data) => {
        res.render("profile", {data})
    });
});

router.get('/upcsearch', (req, res) => {
    // CALL TO API AND CALLBACK W/ RESULTS TO MODAL
});