var express = require('express');
var q = require('q');
var Semester = require('../models/semester');
var Course = require('../models/course');
var Deliverable = require('../models/deliverable');

var semesterRouter = new express.Router();

semesterRouter.route('/default')
    .get(function (req, res) {
        var searchParams = {};
        if (req.query.userId) {
            searchParams.user = req.query.userId;
            searchParams.isCurrent = true;
        }
        else {
            res.status(401).send({ error: 'Request failed, \'userId\' is required.' });
            return;
        }

        Semester.findOne(searchParams).lean().exec(function (err, semester) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            Course.find({ semester: semester._id }).lean().exec(function (err, courses) {
                if (err) {
                    res.status(500).send(err);
                    return;
                }
                semester.courses = courses;
                
                var summaryPromises = [];
                semester.courses.forEach(function(course){
                    summaryPromises.push(addCourseSummary(course));
                })

                q.all(summaryPromises)
                    .then(function(){
                        res.json(semester)
                    });
            });
        });
    })
    .post(function (req, res) {
        var semester = new Semester();
        semester.name = req.body.name;
        semester.isCurrent = req.body.isCurrent;
        semester.user = req.decoded._id;
        semester.save(function (err) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(semester);
        });
    });

semesterRouter.route('/:semesterId')
    .get(function (req, res) {
        Semester.findById(req.params.semesterId).lean().exec(function (err, semester) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(semester);
            return;
        });
    })

module.exports = semesterRouter;

// helpers

function addCourseSummary(course){

    var deferred = q.defer();

    Deliverable.find({ course: course._id }, function (err, deliverables) {
        if (err || deliverables.length == 0) {
            deferred.resolve();
            return;
        }
        var marked = 0;
        var grade = 0;

        for(var i = 0; i < deliverables.length; i++){
            var deliverable = deliverables[i];
            if(typeof(deliverable.mark) == "number"){
                marked += deliverable.weight;
                grade += deliverable.mark / 100 * deliverable.weight;
            }
        }
        if(marked == 0){
            deferred.resolve();
            return;
        }
        course.mark = grade * 100 / marked;
        deferred.resolve();
    });

    return deferred.promise;

}
