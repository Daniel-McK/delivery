var express = require('express');
var Category = require('../models/category');

var categoryRouter = new express.Router();

categoryRouter.route('')
    .post(function(req, res){
        if(!req.isAdmin){
            res.status(401).json({error: 'User is not authorized to add categories'});
        }
        var category = new Category();
        category.name = req.body.name;
        category.save(function (err) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(category);
        });
    })
    .get(function (req, res) {
        Category.find().exec(function(err, categories){
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(categories);
        });
    });

module.exports = categoryRouter;
