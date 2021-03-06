const {check, validationResult, body} = require('express-validator');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Debes completar el campo nombre'),

    check('lastname')
    .notEmpty()
    .withMessage('Debes completar el campo apellido'),

    check('email')
    .notEmpty()
    .withMessage('Debes completar el campo email'),

    check('documento')
    .notEmpty()
    .isLength({
      min : 9,
      max : 9
    })
    .withMessage('Tiene que ser un dni valido'),

    check('pais')
    .notEmpty()
    .withMessage('Debes seleccionar un país'),

    check('country')
    .notEmpty()
    .withMessage('Debes completar el campo localidad'),

    check('password')
    .notEmpty()
    .withMessage('Debes completar el campo contraseña'),

    body('password2').custom((value, {req})=> value !== req.body.password ? false : true)
    .withMessage('Las contraseñas no coinciden')
  ]