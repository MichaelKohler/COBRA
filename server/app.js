(function () {
  'use strict';

  var express = require('express'),
      bodyParser = require('body-parser'),
      app = express();

  app.use(bodyParser.urlencoded({ extended: false }));

  var server = app.listen(3000, function () {
    console.log('Server started on Port ' + server.address().port);
  });

  /** ROUTES **/
  var example = require('./example');
  app.get('/todo', todo);
}());