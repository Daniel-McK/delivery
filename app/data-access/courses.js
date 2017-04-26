var express = require('express');
var Course = require('../models/course');
var Deliverable = require('../models/deliverable');

var courseRouter = new express.Router();

courseRouter.route('')
    .post(function (req, res) {
        var course = new Course();
        course.name = req.body.name;
        course.semester = req.body.semester;
        course.save(function (err) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(course);
        });
    });

courseRouter.route('/:courseId')
    .get(function (req, res) {
        Course.findById(req.params.courseId).lean().exec(function (err, course) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            Deliverable.find({ course: course._id }, function (err, deliverables) {
                if (err) {
                    res.status(500).send(err);
                    return;
                }
                course.deliverables = deliverables;
                res.json(course);
            });
        });
    })

module.exports = courseRouter;
