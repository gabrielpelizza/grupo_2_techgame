const {check, validationResult, body} = require('express-validator');

module.exports = [
    check('nombre')
    .notEmpty()
    .withMessage('Debes completar el campo nombre.'),

    check('precio')
    .notEmpty()
    .isNumeric()
    .withMessage('Debes completar el campo precio.'),

    check('sku')
    .notEmpty()
    .isNumeric()
    .withMessage('Debes completar el campo sku.'),

    check('stock')
    .notEmpty()
    .isNumeric()
    .withMessage('Debes completar el campo stock.'),

    check('categoria')
    .notEmpty()
    .withMessage('Debes completar el campo de categoria.'),

    check('marcas')
    .notEmpty()
    .withMessage('Debes completar el campo de marca.'),

    check('descripcion')
    .notEmpty()
    .withMessage('Debes agregar una descripción.'),

    check('descuento')
    .isNumeric()
    .isLength({
        min :0,
        max : 2
    }).withMessage('Descuento invalido')


  ]