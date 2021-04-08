const {check, validationResult, body} = require('express-validator');
const db = require('../database/models')
module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El campo nombre es obligatorio'),

    check('lastname')
    .notEmpty()
    .withMessage('El campo apellido es obligatorio'),


    check('dni')
    .notEmpty()
    .isNumeric()
    .isLength({
      min : 8,
      max : 8
    })
    .withMessage('El campo dni es obligatorio'),


    check('country')
    .notEmpty()
    .withMessage('El campo país es obligatorio')
  ]