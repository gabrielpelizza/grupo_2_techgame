var express = require('express');
var router = express.Router();

const {createProduct, crud, deleteProduct, } = require('../controllers/adminController');

router.get('/', crud);

router.delete('/delete/:id', deleteProduct)

router.post('/create', createProduct)


module.exports = router;
