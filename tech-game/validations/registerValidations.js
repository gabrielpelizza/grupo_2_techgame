const {check, validationResult, body} = require('express-validator');
const db = require('../database/models')
module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Debes completar el campo nombre'),

    check('lastname')
    .notEmpty()
    .withMessage('Debes completar el campo apellido'),

    check('email')
    .notEmpty()
    .isEmail()
    .withMessage('Debes completar el campo email'),

    check('dni')
    .notEmpty()
    .isNumeric()
    .isLength({
      min : 8,
      max : 8
    })
    .withMessage('Tiene que ser un dni valido'),

 /*    check('pais')
    .notEmpty()
    .withMessage('Debes seleccionar un país'),
 */
    check('country')
    .notEmpty()
    .withMessage('Debes completar el campo localidad'),

    check('password')
    .notEmpty()
    .withMessage('Debes completar el campo contraseña'),

    body('password2').custom((value, {req})=> value !== req.body.password ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    body('email').custom(value => {
      return db.Usuarios.findOne({
          where : {
              email : value
          }
      })
      .then(user => {
          if(user){
              return Promise.reject('Este email ya está registrado')
          }
      })
   })
  ]