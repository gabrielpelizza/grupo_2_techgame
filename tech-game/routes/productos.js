var express = require('express');
var router = express.Router();

const productosController = require('../controllers/productosController');

router.get('/', productosController.productos);

router.get('/detalle/:id', productosController.detalle);

router.get('/carrito', productosController.carrito);

router.get('/search', productosController.buscar);

router.get('/filter', productosController.filter);
  

module.exports = router;
