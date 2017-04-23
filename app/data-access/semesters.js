var express = require('express');
var Semester = require('../models/semester');

var semesterRouter = new express.Router();

semesterRouter.route('')
    .get(function (req, res) {
        var searchParams = {};
        if(req.query.userId){
            searchParams.user = req.query.userId;
            searchParams.isCurrent = true;
        }
        else {
            res.status(401).send({ error: 'Request failed, \'userId\' is required.' });
            return;
        }

        Semester.findOne(searchParams, function (err, semester) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(semester);
        });
    })

semesterRouter.route('/:semesterId')
    .get(function (req, res) {
        Semester.findById(req.params.semesterId, function (err, semester) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(semester);
            return;
        });
    })

module.exports = semesterRouter;
