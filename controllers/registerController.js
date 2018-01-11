const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = express.Router();

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    user.create([
        req.body.first_name,
        req.body.last_name,
        req.body.username,
        req.body.password,
        req.body.email,
        req.body.height_feet,
        req.body.height_inches,
        req.body.weight,
        // DOES NOT WORK:
        req.body.allergies
    ]);
    res.redirect('/profile');
});