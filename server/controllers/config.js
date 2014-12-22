(function () {
  'use strict';
  var Config = require('../models/config');

  exports.getConfig = function getConfig(req, res) {
    req.db.find({ id: 1 }, function (error, config) {
      if (error) {
        res.send(JSON.stringify(error));
      } else {
    	  res.send(JSON.stringify(config));
      }
    });
  };

  exports.updateConfig = function updateConfig(req, res) {
    var newConfig = new Config({
      title: req.body.title,
      name: req.body.name,
      url: req.body.url,
      color: req.body.color,
      linkColor: req.body.linkColor,
      logo: req.body.logo
    });
    req.db.update({ id: 1}, newConfig, {}, function (err, replacedBy) {
      res.send(JSON.parse(replacedBy));
    });
  }
}());