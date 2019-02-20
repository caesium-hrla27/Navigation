var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "nikesearch"
});

// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected to nikesearch Database 🥳 !!!");
// });

module.exports = db;