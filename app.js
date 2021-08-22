const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/login", function(req, res) {
    res.render("login");
});

app.get('/courses', function(req, res) {
    res.render("courses");
});

app.get('/blog', function(req, res) {
    res.render("blog");
});
app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000");
});