(function () {
  'use strict';
  var Contact = require('../models/contact').Contact;

  exports.getContact = function getContact(req, res) {
    req.db.collection('contact', function (error, collection) {
      var coll = collection;
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

  exports.updateContact = function updateContact(req, res) {
    var newContact = new Contact({
      id: 1,
      facebook: req.body.facebook,
      twitter: req.body.twitter,
      xing: req.body.xing,
      linkedin: req.body.linkedin,
      email: req.body.email
    });
    req.db.collection('contact', function (error, collection) {
      collection.update({ id: 1 }, newContact, { upsert: true }, function (err, status) {
        if (error || err) {
          res.status(500);
          res.send(error);
        }
        else {
          res.status(200);
          res.send(JSON.stringify(newContact));
        }
      });
    });
  };

}());