var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

mongoose.disconnect();

var app = express();
var port = process.env.PORT || 80;

var routes = require('./app/routes');
var db = require('./config/db');

mongoose.connect(db.url);

// third party request processing
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));

// app code
app.use(express.static('public-dist'));

app.use('/api', routes);

// fallback to root @HACK
app.use(function(req, res){
    res.sendFile(__dirname + '/public-dist/index.html');
})

// start the app
app.listen(port);                     
console.log('Running on port ' + port);     