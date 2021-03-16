var express = require('express');
var router = express.Router();

/*Usuarios

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

const usuariosController = require('../controllers/usuariosController')
const registerValidations = require('../validations/registerValidations');

const checkUser = require('../middlewares/checkUsers');

router.get('/registro', usuariosController.registro);
router.post('/registro',registerValidations, usuariosController.processRegistro);

router.get('/login', usuariosController.inicioSesion);
router.post('/login', usuariosController.processLogin);


router.get('/cerrarSesion',checkUser, usuariosController.cerrarSesion)


router.get('/perfil/:id',checkUser,usuariosController.perfilUser)
router.put('/perfil',usuariosController.perfilEditadoUser);

module.exports = router;
