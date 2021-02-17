var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registro', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('registro', { title: 'Express' });
});
router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Express' });
});
module.exports = router;
