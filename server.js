
// set up
var express = require('express');
var app     = express();
var mongoose = require('mongoose');
// log requests to the console
var morgan = require('morgan');
// pull information from HTML POST
var bodyParser = require('body-parser');
// simulate DELETE and PUT
var methodOverride = require('method-override');

var Color = require('./server/models/color.js');

// configuration
//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

    next();
};
// mongoose.connect('mongodb://localhost:27017/todoapp');
mongoose.connect('mongodb://justin858:1q2w3e4r@ds011775.mlab.com:11775/justinhufullstack');

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(allowCrossDomain);
app.use(methodOverride());

// routes

  // API
  // get colors
  app.get('/api/colors', function(req, res) {
    // use mongoose to get all todos in the database
    Color.find(function(err, todos) {
      // if there is an error retrieving, send the
      if (err)
        res.send(err)

      res.json(todos); // return all todos in JSON format
    });
  });

  // get one color
  app.get('/api/colors/:colorName', function(req, res) {
    // use mongoose
    Color.findOne({'name': req.params.colorName }, function(err, project) {
      // if there is an error retrieving, send the
      if (err)
        res.send(err)

      res.json(project); // return all todos in JSON format
    });
  });


// listen (start app with node server.js )
app.listen(8090);
console.log("App listening on port 8090");
