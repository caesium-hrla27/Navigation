const db = require('./index.js');

module.exports = {
  querySearch: (query, callback) => {
    let sql = `SELECT * FROM Products WHERE name LIKE ${query}% AND description LIKE  ${query}% AND type LIKE  ${query}%;`;
    db.query(sql, (err, results) => {
      callback(err, results);
    });
  }
};