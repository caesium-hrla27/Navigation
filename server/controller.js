// Access to MYSQL database helpers
const db = require('./../db/dbhelpers.js');

module.exports = {
  search: (req, res) => {

    let { query } = req.params;
    db.querySearch(query, (err, results) => {
      if (err) {
        res.status.send(JSON.stringify({}));
      } else {
        res.status(200).send(JSON.stringify(results));
      }
    })
  }
}