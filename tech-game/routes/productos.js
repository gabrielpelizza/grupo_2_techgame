var express = require('express');
var router = express.Router();

const productosController = require('../controllers/productosController');

router.get('/', productosController.productos);

router.get('/detalle/:id', productosController.detalle);

router.get('/carrito', productosController.carrito);
  

module.exports = router;
