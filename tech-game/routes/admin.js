var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/crud');
});
router.get('/crud', function(req, res, next) {
    res.render('admin/crud');
});

module.exports = router;
