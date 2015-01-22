(function () {
  'use strict';

  exports.Blogpost = function (postObj) {
  	this.id = postObj.id || '';
  	this.content = postObj.content || '';
  	this.title = postObj.title || '';
  	this.date = postObj.date || '';
  };
}());