// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                name: req.user.name,
                id: req.user.id
            });
        }
    });

    app.post("/api/new_site_data", function (req, res) {
        db.Site.findOne({
            where: {
                id: req.user.id
            }
        }).then(function (result) {
            console.log("req.body", req.body)
            db.Site.create({
                site: req.body.site,
                username: req.body.username,
                sPassword: req.body.sPassword
            }).then(function () {
                res.redirect("back");
            }).catch(function (err) {
                console.log("error", err);
                // handle error;
            });
        })
    })

    app.get("/api/new_site_data", function (req, res))
};