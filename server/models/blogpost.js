(function () {
  'use strict';

  exports.Blogpost = Blogpost;

  var Blogpost = function (postObj) {
  	this.id = postObj.id || '';
  	this.content = postObj.content || '';
  	this.title = postObj.title || '';
  	this.date = postObj.date || '';
  	this.slug = postObj.slug || '';
  };

  Blogpost.prototype.id = '';
  Blogpost.prototype.title = '';
  Blogpost.prototype.content = '';
  Blogpost.prototype.date = '';
  Blogpost.prototype.slug = '';
}());