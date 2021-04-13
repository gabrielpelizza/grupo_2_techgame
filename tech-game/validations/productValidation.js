const {check, validationResult, body} = require('express-validator');

module.exports = [
    check('product_name')
    .trim()
    .isLength({
        max : 45
    }).withMessage('Maximo 45 caracteres')
    .notEmpty()
    .withMessage('Debes completar el campo nombre.'),

    check('price')
    .trim()
    .toFloat()
    .notEmpty()
    .withMessage('Debes completar el campo precio.'),

    check('sku')
    .trim()
    .toInt()
    .notEmpty()
    .withMessage('Debes completar el campo sku.'),

    check('stock')
    .trim()
    .toInt()
    .notEmpty()
    .withMessage('Debes completar el campo stock.'),

    check('description')
    .trim()
    .isLength({
        min: 6,
        max :300
    }).withMessage('Debe tener entre 6 y 300 caracteres')
    .notEmpty()
    .withMessage('Debes agregar una descripción.'),

    check('discount')
    .trim()
    .isLength({
        min:0,
        max : 2
    }).withMessage('Debe ser un numero de dos cifras'),
    
    check('marcas')
    .notEmpty()
    .withMessage('Debes agregar una marca'),

    check('categorias')
    .notEmpty()
    .withMessage('Debes agregar una categoria')

  ]