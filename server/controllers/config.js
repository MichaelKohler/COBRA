(function () {
  'use strict';
  var Datastore = require('nedb'),
      db = new Datastore({ filename: 'cobra.db', autoload: true });

  exports.getConfig = function getConfig(req, res) {
    db.find({ id: 1 }, function (error, config) {
      if (error) {
        res.send(JSON.stringify(error));
      } else {
    	  res.send(JSON.stringify(config));
      }
    });
  };

  exports.updateConfig = function updateConfig(req, res) {

  };

}());