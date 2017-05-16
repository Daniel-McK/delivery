var express = require('express');
var Deliverable = require('../models/deliverable');

var deliverableRouter = new express.Router();

deliverableRouter.route('')
    .post(function (req, res) {
        var deliverable = new Deliverable();
        deliverable.name = req.body.name;
        deliverable.course = req.body.courseId;
        deliverable.category = req.body.category;
        deliverable.weight = req.body.weight;
        deliverable.mark = req.body.mark;
        deliverable.isComplete = req.body.isComplete;
        deliverable.due = req.body.due;
        deliverable.save(function (err) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(deliverable);
        });
    });

deliverableRouter.route('/:deliverableId')
    .get(function (req, res) {
        Deliverable.findById(req.params.deliverableId, function (err, deliverable) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(deliverable);
            return;
        });
    })
    .put(function(req, res){
        Deliverable.findById(req.params.deliverableId, function (err, deliverable) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            deliverable.name = req.body.name;
            deliverable.course = req.body.course;
            deliverable.category = req.body.category;
            deliverable.weight = req.body.weight;
            deliverable.mark = req.body.mark;
            deliverable.isComplete = req.body.isComplete;
            deliverable.due = req.body.due;
            deliverable.save(function (err) {
                if (err) {
                    res.status(500).send(err)
                    return;
                }
                res.send(true);
            });
        });
    });

module.exports = deliverableRouter;
