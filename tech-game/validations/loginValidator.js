const {check, body} = require('express-validator')

module.exports = [
    check('email').notEmpty().withMessage('el mail es requerido'),

    check('pass').notEmpty().withMessage("La contraseña es requerida")
]