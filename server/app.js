(function () {
  'use strict';

  var express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      infos = require('./configuration'),
      app = express(),
      mongo = require('mongodb'),
      dbServer = new mongo.Server('localhost', 27017, { auto_reconnect: true, poolSize: 1 }),
      db = new mongo.Db(infos.config.server.dbname, dbServer, { safe: true });

  db.open(function (err, db) {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to DB on port 27017.');
    }
  });

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 }
  }));

  app.use(function(req, res, next) {
    req.db = db;
    next();
  });

  var requiresLogin = function(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      res.status(401);
      res.send('NOPE!');
    }
  };

  var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://' + infos.config.mandant.name + ':' + infos.config.mandant.port);
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Max-Age', 1728000);
    next();
  };

  app.use(allowCrossDomain);

  /** ROUTES **/
  var user = require('./controllers/user');
  app.post('/login', user.login);
  app.post('/session', user.session);
  app.get('/logout', requiresLogin, user.logout);

  var config = require('./controllers/config');
  app.get('/config', config.getConfig);
  app.post('/config/update', requiresLogin, config.updateConfig);

  var contact = require('./controllers/contact');
  app.get('/contact', contact.getContact);
  app.post('/contact/update', requiresLogin, contact.updateContact);

  var content = require('./controllers/content');
  app.get('/content', content.getContent);
  app.post('/content/update', requiresLogin, content.updateContent);

  var blog = require('./controllers/blog');
  app.get('/blogposts', blog.getAllBlogposts);
  app.get('/blogpost/:blogID', blog.getBlogpostById);
  app.post('/blogpost/:blogID', requiresLogin, blog.saveBlogpost);
  app.delete('/blogpost/:blogID', requiresLogin, blog.deleteBlogpostById);


  var server = app.listen(infos.config.server.port, function () {
    console.log('Server for ' + infos.config.mandant.name + ' started on Port ' + server.address().port);
  });
}());