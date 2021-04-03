const path = require('path');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const db = require('../database/models');

/* let fs = require('fs');*/

/* const {getProduct} = require(path.join('..', 'data', 'products'));
const product = getProduct(); */
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

    filter: (req,res)=>{
        const {filtrar} = req.query;
    
        switch (filtrar) {
            case "1":
                db.Productos.findAll({
                    where:{
                        category_id : 1
                    }
                })
                .then((product)=>{
                    res.render('productos', {
                        product,
                        toThousand
                });
            });
                

                break;
            case "2":
                db.Productos.findAll({
                    where:{
                        category_id : 2
                    }
                })
                .then((product)=>{
                    res.render('productos', {
                        product,
                        toThousand
                });
            });

            default:
                    db.Productos.findAll()
                        .then((product)=>{
                            res.render('productos', {
                                product,
                                toThousand
                            });
                    });
                break;
        }
    },

    detalle : (req, res)=>{
        db.Productos.findOne({
            where : {
                id: req.params.id
            },
            include : [
                {
                    association : 'marcas'
                }
            ]
        })

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
    },
    buscar : (req,res)=>{
        buscar = req.query.buscar;
        db.Productos.findAll({
            where:{
                product_name:{ [Op.like]: `%${req.query.buscar}%` }
            }
        })
        .then(product =>{
            return res.render('resultados', {
                title: 'Resultados',
                product,
                buscar,
                toThousand
            })
        })
    }
}