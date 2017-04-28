var express = require('express');

var router = new express.Router();

var loginRouter = require('./data-access/login');
var middleware = require('./data-access/middleware');
var semesterRouter = require('./data-access/semesters');
var courseRouter = require('./data-access/courses');
var deliverableRouter = require('./data-access/deliverables');
var categoryRouter = require('./data-access/categories');

router.use('/authentication', loginRouter);
router.use(middleware);
router.use('/semester', semesterRouter);
router.use('/course', courseRouter);
router.use('/deliverable', deliverableRouter);
router.use('/category', categoryRouter);

module.exports = router;