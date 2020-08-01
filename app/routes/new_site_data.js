// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

    // Route for getting some data about our user to be used client side
    app.get("/api/new_site_data", function (req, res) {
        console.log("handeling get request for /api/new_site_data");
        db.Site.findAll({}).then(function (siteRecords) {

            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                siteRecords: siteRecords
            });
        });
    });

    app.post("/api/new_site_data", function (req, res) {
        console.log("handeling post request for /api/new_site_data")
        db.Site.create({
                site: req.body.site,
                username: req.body.username,
                sPassword: req.body.sPassword
            })
            .then(function () {
                res.redirect("/members");
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });
}