const path = require('path');
const db = require('../database/models');

/* let fs = require('fs');*/

const {getProduct} = require(path.join('..', 'data', 'products'));
const product = getProduct();
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    productos : (req,res)=>{
        db.Productos.findAll()
            .then((product)=>{
                res.render('productos', {
                    product,
                    toThousand
                });
        });
    },

    detalle : (req, res)=>{
        db.Productos.findByPk(req.params.id)
        .then(producto =>{
            return res.render('detalle', {
                title: 'Producto',
                producto,
                toThousand
            })
        })
        .catch(error => res.send(error))
        /* let productDetail = product.find(producto =>{
            return producto.id === +req.params.id
        })
        
        res.render('detalle', { 
            title: 'Producto',
            productDetail,
            toThousand

        }); */
      },
    carrito : (req, res, next)=>{
        res.render('miCarrito', { title: 'Express' });
    }
}