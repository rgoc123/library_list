var express = require('express');
var router = express.Router();

/* GET business listing. */
router.get('/', function(req, res, next) {
  res.render('test');
})

module.exports = router;