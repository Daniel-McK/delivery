var express = require('express');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

var User = require('../models/user');
var db = require('../../config/db');

var loginRouter = new express.Router();

loginRouter.route('/login')
    .post(function (req, res) {
        var email = req.body.email;
        var password = req.body.password;
        if (typeof (email) == 'undefined' || email == null || typeof (password) == 'undefined' || password == null) {
            res.status(400).send({ error: 'Login requires the email and password to be in the body of the POST.' });
            return;
        }
        User.findOne({
            email: email
        }, function (err, user) {
            if (err) throw err;

            // user exists
            if (!user) {
                res.json({ success: false, message: 'Authentication failed.' });
                return;
            }

            //password matches
            if (!bcrypt.compareSync(password, user.password)) {
                res.json({ success: false, message: "Authentication failed." });
                return;
            }

            var cleanUser = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                _id: user._id,
                admin: user.admin
            };

            var maxAgeInSeconds = 24 * 60 * 60 * 7;

            var token = jwt.sign(cleanUser, db.secret, {
                expiresIn: maxAgeInSeconds
            });

            res.json({
                success: true,
                message: "Login was successful.",
                token: token,
                user: cleanUser
            });
        });
    });


loginRouter.route('/register')
    .post(function (req, res) {
        var email = req.body.email;
        var password = req.body.password;
        if (typeof (email) == 'undefined' || email == null || typeof (password) == 'undefined' || password == null) {
            res.status(400).send({ error: 'Registering requires email and password to be in the body of the POST.' });
            return;
        }

        var user = new User();
        user.email = email;
        user.password = bcrypt.hashSync(password);
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.validated = false;
        user.admin = false;

        user.save(function (err) {
            if (err) {
                res.json({ success: false, message: 'Failed to register new user.' });
                return;
            }

            var cleanUser = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                _id: user._id,
                admin: user.admin
            };

            var maxAgeInSeconds = 24 * 60 * 60 * 7;

            var token = jwt.sign(cleanUser, db.secret, {
                expiresIn: maxAgeInSeconds
            });

            res.json({
                success: true,
                message: "Registration was successful.",
                token: token,
                user: cleanUser
            });
        });


    });

loginRouter.route('/verify-token')
    .get(function (req, res) {
        var token = req.headers['token'];

        if (!token) {
            return res.send({
                success: false,
                message: 'No token provided'
            });
        }

        jwt.verify(token, db.secret, function (err, decoded) {
            if (err) {
                res.json({ success: false, message: "Failed to authenticate token" });
                return;
            }

            res.json({ success: true, user: decoded });
        });
    });

module.exports = loginRouter;

