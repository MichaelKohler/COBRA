(function () {
  'use strict';

  exports.Config = Config;

  var Config = function (configObj) {
  	this.title = configObj.title || 'Empty project';
  	this.name = configObj.name || 'Empty project';
  	this.url = configObj.url || 'example.com';
  	this.color = configObj.color || '#000000';
  	this.linkColor = configObj.linkColor || '#000000';
  	this.logo = configObj.logo || '';
  };

  Config.prototype.title = '';
  Config.prototype.name = '';
  Config.prototype.url = '';
  Config.prototype.color = '';
  Config.prototype.linkColor = '';
  Config.prototype.logo = '';
}());