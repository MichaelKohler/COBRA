(function () {
  'use strict';

  exports.Config = function Config(configObj) {
    this.id = configObj.id || 1;
  	this.title = configObj.title || 'Empty project';
  	this.name = configObj.name || 'Empty project';
  	this.url = configObj.url || 'example.com';
  	this.color = configObj.color || '#000000';
  	this.linkColor = configObj.linkColor || this.color;
  	this.logo = configObj.logo || '';
  };
}());