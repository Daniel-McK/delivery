var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
var port = process.env.PORT || 80;

// third party request processing
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));

// app code
app.use(express.static('public-dist'));

// fallback to root @HACK
app.use(function(req, res){
    res.sendFile(__dirname + '/public-dist/index.html');
})

// start the app
app.listen(port);                     
console.log('Running on port ' + port);     