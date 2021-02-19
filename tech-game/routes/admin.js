var express = require('express');
var router = express.Router();
const upload = require('../middlewares/subidaImagenes');
const {createProduct,productModificado,productAlmacenado, crud, deleteProduct, editarProducto,index} = require('../controllers/adminController');

router.get('/', index)
router.get('/productos', crud);

router.get('/productos/create',createProduct) //muestra el formulario crear producto

router.post('/productos/create', upload.any(), productAlmacenado)//cumple la accion de almacenar el producto agregado

router.delete('/productos/delete/:id', deleteProduct) //cumple la accion de eliminar producto

router.get('/productos/editar/:id', editarProducto) //muestra vista con datos de producto 
router.put('/productos/update/:id',productModificado);

module.exports = router;
