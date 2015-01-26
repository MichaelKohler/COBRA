(function () {
  'use strict';

  var Blogpost = require('../models/blogpost').Blogpost;

  exports.getAllBlogposts = function getAllBlogposts(req, res) {
    req.db.collection('blogposts', function (error, collection) {
      collection.find({}, {'sort':[['id', -1]]}).toArray(function (error, posts) {
        if (error) {
          res.status(500);
          res.send(JSON.stringify(error));
        } else {
          res.status(200);
          res.send(JSON.stringify(posts));
        }
      });
    });
  };

  exports.getBlogpostById = function getBlogpostById(req, res) {
    req.db.collection('blogposts', function (error, collection) {
      collection.findOne({ id: req.params.blogID }, function (error, post) {
        if (error) {
          res.status(500);
          res.send(JSON.stringify(error));
        } else {
          res.status(200);
          var postmodel = {};
          if (!post) {
            postmodel = new Blogpost({
              title: '',
              content: ''
            });
          } else {
            postmodel = post;
          }
          res.send(JSON.stringify(postmodel));
        }
      });
    });
  };

  exports.saveBlogpost = function saveBlogpost(req, res) {
    var newBlogpost = new Blogpost({
      id: req.body.id,
      title: req.body.title,
      content: req.body.content,
      date: Date.now()
    });
    req.db.collection('blogposts', function (error, collection) {
      collection.update({ id: newBlogpost.id }, newBlogpost, { upsert: true }, function (err, status) {
        if (error || err) {
          res.status(500);
          res.send(error);
        }
        else {
          res.status(200);
          res.send(JSON.stringify(newBlogpost));
        }
      });
    });
  };

  exports.deleteBlogpostById = function deleteBlogpostById(req, res) {
    req.db.collection('blogposts', function (error, collection) {
      collection.remove({ id: req.params.blogID }, function (err, status) {
        if (error || err) {
          res.status(500);
          res.send(error);
        }
        else {
          res.status(200);
          res.send(JSON.stringify({ deleted: true }));
        }
      });
    });
  };

}());