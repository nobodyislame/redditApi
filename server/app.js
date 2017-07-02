var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var routes = require('./routes.js');

//Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/redditstore', function(){
	console.log('connected to mongoDB..');
})

var app = express();
app.use(bodyParser.json());
app.use('/api', routes);

module.exports = app;