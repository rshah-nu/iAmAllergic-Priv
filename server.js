var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./controllers/homeController")(app);
require("./controllers/profileController")(app);
require("./controllers/registerController")(app);


// app.use("/profile", profileRoutes);
// app.use("/register", registerRoutes);
// app.use("/login", registerRoutes);

app.listen(port);

