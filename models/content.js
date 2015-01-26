(function () {
  'use strict';

  exports.Content = function (contentObj) {
    this.id = contentObj.id || 1;
  	this.content = contentObj.content || '';
  };

}());