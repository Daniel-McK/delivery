var express = require('express');

var router = new express.Router();

var loginRouter = require('./data-access/login');

router.use('/authentication', loginRouter);

module.exports = router;