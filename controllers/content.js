(function () {
  'use strict';
  var Content = require('../models/content').Content;

  exports.getContent = function getContent(req, res) {
    req.db.collection('content', function (error, collection) {
      collection.find({ id: 1 }).toArray(function (error, contacts) {
        if (error) {
          res.status(500);
          res.send(JSON.stringify(error));
        } else {
          res.status(200);
          res.send(JSON.stringify(contacts[0]));
        }
      });
    });
  };

  exports.updateContent = function updateContent(req, res) {
    var newContent = new Content({
      id: 1,
      content: req.body.content
    });
    req.db.collection('content', function (error, collection) {
      collection.update({ id: 1 }, newContent, { upsert: true }, function (err, status) {
        if (error || err) {
          res.status(500);
          res.send(error);
        }
        else {
          res.status(200);
          res.send(JSON.stringify(newContent));
        }
      });
    });
  };

}());