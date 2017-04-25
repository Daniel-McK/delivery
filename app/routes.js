var express = require('express');

var router = new express.Router();

var loginRouter = require('./data-access/login');
var middleware = require('./data-access/middleware');
var semesterRouter = require('./data-access/semesters');
var courseRouter = require('./data-access/courses');

router.use('/authentication', loginRouter);
router.use(middleware);
router.use('/semester', semesterRouter);
router.use('/course', courseRouter);

module.exports = router;