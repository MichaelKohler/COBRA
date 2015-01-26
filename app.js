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

  
  app.use(bodyParser.json({limit: '5mb'}));
  app.use(bodyParser.urlencoded({limit: '5mb', extended: false }));
  app.use('/', express.static('client'));
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

  /** ROUTES **/
  var user = require('./controllers/user');
  app.post('/api/login', user.login);
  app.post('/api/session', user.session);
  app.get('/api/logout', requiresLogin, user.logout);

  var config = require('./controllers/config');
  app.get('/api/config', config.getConfig);
  app.put('/api/config/update', requiresLogin, config.updateConfig);

  var contact = require('./controllers/contact');
  app.get('/api/contact', contact.getContact);
  app.post('/api/contact/update', requiresLogin, contact.updateContact);

  var content = require('./controllers/content');
  app.get('/api/content', content.getContent);
  app.post('/api/content/update', requiresLogin, content.updateContent);

  var blog = require('./controllers/blog');
  app.get('/api/blogposts', blog.getAllBlogposts);
  app.get('/api/blogpost/:blogID', blog.getBlogpostById);
  app.post('/api/blogpost/:blogID', requiresLogin, blog.saveBlogpost);
  app.delete('/api/blogpost/:blogID', requiresLogin, blog.deleteBlogpostById);

  var gallery = require('./controllers/gallery');
  app.get('/api/pictures', gallery.getAllPictures);
  app.post('/api/picture', gallery.savePicture);


  var server = app.listen(infos.config.server.port, function () {
    console.log('Server started on Port ' + server.address().port);
  });
}());