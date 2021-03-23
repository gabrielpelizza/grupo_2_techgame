var express = require('express');
var router = express.Router();
const upload = require('../middlewares/subidaImagenes');
const productValidator = require('../validations/productValidation');

const {createProduct,productModificado,productAlmacenado, crud, deleteProduct,index, usuario, editProduct,admincrud,createAdmin,editAdmin} = require('../controllers/adminController');


const checAdmin = require('../middlewares/checkUsers');

router.get('/', checAdmin,index)
router.get('/productos',checAdmin, crud);

router.get('/productos/create',checAdmin,createProduct) //muestra el formulario crear producto

router.post('/productos/create',checAdmin, upload.any(), productValidator, productAlmacenado)//cumple la accion de almacenar el producto agregado

router.delete('/productos/delete/:id',checAdmin, deleteProduct)  //cumple la accion de eliminar producto

 router.get('/productos/editar/:id',checAdmin, editProduct)  //muestra vista con datos de producto 
 router.put('/productos/update/:id',productModificado); 



 //-----------------usuarios crud-------

 router.get('/usuarios', admincrud)
 router.get('/usuarios/create',createAdmin)
 router.get('/usuarios/edit',editAdmin)
module.exports = router;
