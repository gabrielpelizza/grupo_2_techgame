const {check, validationResult, body} = require('express-validator');

module.exports = [
    check('product_name')
    .notEmpty()
    .withMessage('Debes completar el campo nombre.'),

    check('price')
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

    check('description')
    .notEmpty()
    .withMessage('Debes agregar una descripción.'),

    check('discount')
    .isLength({
        min :0,
        max : 2
    })
    .notEmpty()
    .withMessage('Descuento invalido')


  ]