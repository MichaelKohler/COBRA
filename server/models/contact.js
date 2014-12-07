(function () {
  'use strict';

  exports.Contact = Contact;

  var Contact = function (contactObj) {
  	this.facebook = contactObj.facebook || '';
  	this.twitter = contactObj.twitter || '';
  	this.xing = contactObj.xing || '';
  	this.linkedin = contactObj.linkedin || '';
  	this.instagram = contactObj.instagram || '';
  	this.flickr = contactObj.flickr || '';
  };

  Contact.prototype.facebook = '';
  Contact.prototype.twitter = '';
  Contact.prototype.xing = '';
  Contact.prototype.linkedin = '';
  Contact.prototype.instagram = '';
  Contact.prototype.flickr = '';
}());