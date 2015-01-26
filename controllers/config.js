(function () {
  'use strict';
  var Config = require('../models/config').Config;

  exports.getConfig = function getConfig(req, res) {
    req.db.collection('config', function (error, collection) {
      collection.find({ id: 1 }).toArray(function (error, config) {
        if (error) {
          res.status(500);
          res.send(JSON.stringify(error));
        } else {
          res.status(200);
          res.send(JSON.stringify(config[0]));
        }
      });
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
    req.db.collection('config', function (error, collection) {
      collection.update({ id: 1 }, newConfig, { upsert: true }, function (err, status) {
        if (error || err) {
          res.status(500);
          res.send(error);
        }
        else {
          res.status(200);
          res.send(JSON.stringify(newConfig));
        }
      });
    });
  };
}());