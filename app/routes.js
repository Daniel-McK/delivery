var express = require('express');

var router = new express.Router();

var loginRouter = require('./data-access/login');
var semesterRouter = require('./data-access/semesters')

router.use('/authentication', loginRouter);
//middleware here
router.use('/semester', semesterRouter);

module.exports = router;