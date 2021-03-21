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

    check('country')
    .notEmpty()
    .withMessage('Debes completar el campo localidad'),

    check('password')
    .notEmpty()
    .withMessage('Debes completar el campo contraseña'),

    body('password2').custom((value, {req})=> value !== req.body.password ? false : true)
    .withMessage('Las contraseñas no coinciden')
  ]