var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('miCarrito', { title: 'Express' });
});

module.exports = router;
