const {check, validationResult, body} = require('express-validator');
const db = require('../database/models')
module.exports = [
    check('name')
    .trim()
    .isLength({
    min:3,
    max:45  
    }).withMessage('El campo nombre debe contener entre 3 y 45 caracteres')
    .notEmpty()
    .withMessage('El campo nombre es obligatorio')
 ,

    check('lastname')
    .trim()
    .isLength({
      min:3,
      max:45  
      }).withMessage('El campo apellido debe contener entre 3 y 45 caracteres')
    .notEmpty()
    .withMessage('El campo apellido es obligatorio'),


    check('dni')
    .trim()
    .notEmpty().withMessage('El campo dni es obligatorio.')
    .toInt()
    .isLength({
      min: 8,
      max : 8
    })
    .withMessage('El campo dni es invalido'),


    check('country')
    .trim()
    .notEmpty()
    .withMessage('El campo país es obligatorio')
  ]