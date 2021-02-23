var express = require('express');
var router = express.Router();

/*Usuarios

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

const usuariosController = require('../controllers/usuariosController')

router.get('/registro', usuariosController.registro);

router.get('/login', usuariosController.inicioSesion);



module.exports = router;
