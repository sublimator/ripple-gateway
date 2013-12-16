var Sequelize = require('sequelize');
var db = require('../db');

var User = sequelize.define('user', {
  id: Sequelize.INTEGER,
  kycId: Sequelize.INTEGER,
  bankAccountId: Sequelize.INTEGER,
  name: Sequelize.STRING,
  salt: Sequelize.STRING,
  password_hash: Sequelize.STRING
});

module.exports = User;
