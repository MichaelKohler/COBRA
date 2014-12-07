(function () {
  'use strict';

  exports.Content = Content;

  var Content = function (contentObj) {
  	this.content = contentObj.content || '';
  };

  Content.prototype.content = '';
}());