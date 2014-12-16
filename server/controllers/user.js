(function () {
  'use strict';

  exports.login = function login(req, res) {
  	var user = '';
  	var success = false;
    req.session.user = user;

    res.send(JSON.stringify({
    	title: 'Login',
    	success: success
    }));
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