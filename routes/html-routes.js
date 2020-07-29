// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    app.get("/", function (req, res) {
        // If the user already has an account send them to the members page
        res.render("index")
    });
    app.get("/members", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/login");
        }
        res.render(path.join(__dirname, "../public/members.html"));
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/views/layouts/main.handlebars", isAuthenticated, function (req, res) {
        res.render(path.join(__dirname, "/views/layouts/main"));
    });
};