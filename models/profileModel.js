// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var user_profile = {
  all: function(cb) {
    orm.all("users", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("users", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("users", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("users", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = user_profile;
