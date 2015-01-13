(function () {
  'use strict';

  var config = {
    mandant: {
    	name: "localhost",
        port: 8080
    },

    server: {
    	port: 3001,
        dbname: 'cobra'
    }
  }

  exports.config = config;

}());