const mysql = require('mysql');

var app = mysql.createConnection({
    host: process.env.HOST || 'localhost',
    user: process.env.SQLUSER || 'root',
    password: process.env.SQLPW || 'mikesucks',
    database: process.env.DB || 'iAmAllergic_db'
});

// Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  // Export connection for our ORM to use.
  module.exports = connection;
