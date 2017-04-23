var express = require('express');
var jwt = require('jsonwebtoken');
var db = require('../../config/db');

function middleware(req, res, next) {

    var token = req.headers['token'];

    if (!token) {
        res.status(401).send({error: 'No token provided'});
        return;
    }

    jwt.verify(token, db.secret, function (err, decoded) {
        if (err) {
            res.status(401).send({error: 'Invalid token provided'});
            return;
        }
        else {
            req.isAdmin = decoded.admin;
            req.decoded = decoded;
        }
        next();
    });
}

module.exports = middleware;