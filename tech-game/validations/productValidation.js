const {check, validationResult, body} = require('express-validator');

module.exports = [
    check('product_name')
    .notEmpty()
    .withMessage('Debes completar el campo nombre.'),

    check('price')
    .notEmpty()
    .withMessage('Debes completar el campo precio.'),

    check('sku')
    .notEmpty()
    .withMessage('Debes completar el campo sku.'),

    check('stock')
    .notEmpty()
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

    check('discount')
    .isLength({
        min :0,
        max : 2
    })
    .notEmpty()
    .withMessage('Descuento invalido')


  ]