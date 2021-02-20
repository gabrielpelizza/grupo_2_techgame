const path = require('path');

let fs = require('fs');

const {getProduct} = require(path.join('..', 'data', 'products'));
const product = getProduct();


module.exports = {
    productos : (req,res)=>{
        res.render('productos', {
            product
        })
    },

    detalle : (req, res)=>{

        let productDetail = product.find(producto =>{
            return producto.id === +req.params.id
        })
        
        res.render('detalle', { 
            title: 'Producto',
            productDetail

        });
      },
    carrito : (req, res, next)=>{
        res.render('miCarrito', { title: 'Express' });
    }
}