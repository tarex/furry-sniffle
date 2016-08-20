var express = require('express');
var config = require('./config');
var db = require('knex')(config);
var app = express();


// get, post , put, delete . 

app.use('/', function(req, res, next) {
  db('users').then(function(data) {
    res.json({ data });  
  });
});

app.listen('3000', function(err) {
  console.log('listning to 3000');
});

