var express = require('express');

var router = new express.Router();

var loginRouter = require('./data-access/login');
var semesterRouter = require('./data-access/semesters');
var middleware = require('./data-access/middleware');

router.use('/authentication', loginRouter);
router.use(middleware);
router.use('/semester', semesterRouter);

module.exports = router;