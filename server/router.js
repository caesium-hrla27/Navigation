let router = require('express').Router();
let controller = require('./controller.js');

router
  .route('/search/:query')
  .get(controller.search);

module.exports = router;