(function () {
  'use strict';

  var express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      infos = require('./configuration'),
      app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }));

  var server = app.listen(infos.config.server.port, function () {
    console.log('Server for ' + infos.config.mandant.name + ' started on Port ' + server.address().port);
  });

  function requiresLogin(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      res.status(403);
      res.send('NOPE!');
    }
  }

  /** ROUTES **/
  var user = require('./controllers/user');
  app.post('/login', user.login);
  app.post('/logout', user.logout);

  var config = require('./controllers/config');
  app.get('/config', requiresLogin, config.getConfig);
  app.post('/config/update', requiresLogin, config.updateConfig);

  var contact = require('./controllers/contact');
  app.get('/contact', requiresLogin, contact.getContact);
  app.post('/contact/update', requiresLogin, contact.updateContact);

  var content = require('./controllers/content');
  app.get('/content', requiresLogin, content.getContent);
  app.post('/content/update', requiresLogin, content.updateContent);

  var blog = require('./controllers/blog');
  app.get('/blogposts', requiresLogin, blog.getAllBlogposts);
  app.get('/blogpost/:blogID', requiresLogin, blog.getBlogpostById);
  app.post('/blogpost/create', requiresLogin, blog.createBlogpost);
  app.post('/blogpost/:blogID/update', requiresLogin, blog.updateBlogpostById);
  app.delete('/blogpost/:blogID/delete', requiresLogin, blog.deleteBlogpostById);
}());