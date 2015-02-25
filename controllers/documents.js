(function () {
  'use strict';
  var oid = require('mongodb').ObjectID;
  var File = require('file-api').File;
  var serverConfig = require('../configuration').config;
  
  exports.getAllDocuments = function getAllDocuments(req, res) {
    req.db.collection('documents', function (error, collection) {
      collection.find({}, { _id: 1, name: 1 }).toArray(function (error, documents) {
        if (error) {
          res.status(500);
          res.send(JSON.stringify(error));
        } else {
          res.status(200);
          res.send(JSON.stringify(documents));
        }
      });
    });
  };
  exports.saveDocument = function saveDocument(req, res) {
    req.db.collection('documents', function (error, collection) {
      collection.insert({ document: req.body.binaryString, name: req.body.name }, function (err, result) {
        if (error || err) {
          res.status(500);
          res.send(error);
        }
        else {
          console.log(result);
          res.status(200);
          res.send(JSON.stringify({ success: true, newDoc: {_id: result[0]._id, name: result[0].name} }));
        }
      });
    });
  };

  exports.getDocument = function getDocument(req, res) {
    req.db.collection('documents', function (error, collection) {
      collection.findOne( {_id: new oid(req.params.docID) }, function(err, result) {
        if (err) {
          res.status(500);
          res.send(JSON.stringify(err));
        } else {
          var f = new File({buffer: new Buffer(result.document, "binary"), name: result.name});
          console.log(f);
          res.setHeader("Content-Type", f.type);
          res.status(200);
          res.send(f.buffer);
        }
      });
    });
  };

  exports.deleteDocument = function deleteDocument(req, res) {
    req.db.collection('documents', function (error, collection) {
       collection.remove({ _id: new oid(req.params.docID) }, function (err, numberOfRemovedDocs){
         if (err) {
           res.status(500);
           res.send(JSON.stringify(err));
         } else {
           res.status(200);
           res.send("killed " + numberOfRemovedDocs + " things (" + req.params.docID + ")");
         }
       });
    });
  };

    exports.documentsEnabled = function documentsEnabled(req, res) {
    if (serverConfig.premium.documents == true) {
       res.status(200);
       res.send(true);
    } else {
      res.status(403);
       res.send(false);
    }
  };

}());