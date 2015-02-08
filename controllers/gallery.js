(function () {
  'use strict';

  exports.getPictures = function getPictures(req, res) {
    var max = req.query.max;
    var currentIndex = req.query.index;
    req.db.collection('gallery', function (error, collection) {
      collection.find({}, { skip: currentIndex, limit: max }).toArray(function (error, images) {
        if (error) {
          res.status(500);
          res.send(JSON.stringify(error));
        } else {
          res.status(200);
          res.send(JSON.stringify(images));
        }
      });
    });
  };

  exports.savePicture = function savePicture(req, res) {
    req.db.collection('gallery', function (error, collection) {
      collection.insert({ imageURL: req.body.imageURL }, function (err, status) {
        if (error || err) {
          res.status(500);
          res.send(error);
        }
        else {
          res.status(200);
          res.send(JSON.stringify({ success: true}));
        }
      });
    });
  };
}());