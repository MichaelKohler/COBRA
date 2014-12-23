(function () {
  'use strict';
  var sha256 = require('js-sha256').sha256;

  exports.login = function login(req, res) {
  	var username = req.body.username;
    var password = sha256(req.body.password);
  	var success = false;
    req.db.collection('users', function (error, collection) {
      collection.find({ username: username }).toArray(function (error, user) {
        if (!error && user[0] && user[0].password == password) {
          success = true;
          req.session.user = user[0];
        }
        res.send(JSON.stringify({
          title: 'Login',
          success: success
        }));
      });
    });
  };

  exports.session = function session(req, res) {
    res.send(JSON.stringify(req.session.user));
  };

  exports.logout = function logout(req, res) {
    delete req.session.user;
    res.send(JSON.stringify({
      title: 'Logout',
      success: true
    }));
  };

}());