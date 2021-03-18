var express = require('express');
var router = express.Router();
const upload = require('../middlewares/subidaImagenes');
const productValidator = require('../validations/productValidation');

const {createProduct,productModificado,productAlmacenado, crud, deleteProduct,index, usuario, editProduct,admincrud,createAdmin,editAdmin} = require('../controllers/adminController');

router.get('/', index)
router.get('/productos', crud);

router.get('/productos/create',createProduct) //muestra el formulario crear producto

router.post('/productos/create', upload.any(), productValidator, productAlmacenado)//cumple la accion de almacenar el producto agregado

router.delete('/productos/delete/:id', deleteProduct)  //cumple la accion de eliminar producto

 router.get('/productos/editar/:id', editProduct)  //muestra vista con datos de producto 
 router.put('/productos/update/:id',productModificado); 



 //-----------------usuarios crud-------

 router.get('/usuarios', admincrud)
 router.get('/usuarios/create',createAdmin)
 router.get('/usuarios/edit',editAdmin)
module.exports = router;
