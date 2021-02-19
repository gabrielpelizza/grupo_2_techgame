var express = require('express');
var router = express.Router();

const {createProduct, crud, deleteProduct, editarProducto} = require('../controllers/adminController');

router.get('/', crud);

router.delete('/delete/:id', deleteProduct);

router.post('/create', createProduct);

router.get('/editarProducto/:id', editarProducto);

module.exports = router;
