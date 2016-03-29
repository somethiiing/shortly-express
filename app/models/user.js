var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  // tablename: 'users'
  // }
  // some custom event
  // when you create a username
  // ask for a pasword
  // initialize: function() {
  //   // salts and hashes password
  //   bcrypt.compare(password, user.get('password'))
  // } 

});

module.exports = User;