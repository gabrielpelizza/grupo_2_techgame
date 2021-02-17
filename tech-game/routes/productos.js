var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/detalle', function(req, res, next) {
  res.render('detalle', { title: 'Express' });
});

router.get('/carrito', function(req, res, next) {
    res.render('miCarrito', { title: 'Express' });
  });
  

module.exports = router;
