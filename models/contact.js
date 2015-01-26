(function () {
  'use strict';

  exports.Contact = function (contactObj) {
      this.id = contactObj.id || 1;
      this.facebook = contactObj.facebook || '';
      this.twitter = contactObj.twitter || '';
      this.xing = contactObj.xing || '';
      this.linkedin = contactObj.linkedin || '';
      this.email = contactObj.email || '';
      this.name = contactObj.name || '';
      this.address = contactObj.address || '';
      this.place = contactObj.place || '';
      this.phone = contactObj.phone || '';
  };
}());