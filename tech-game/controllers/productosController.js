const path = require('path');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const db = require('../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    productos : (req,res)=>{
            
        let categorias = db.categories.findAll()
        let product = db.Productos.findAll()
        let marcas = db.Brands.findAll()

        Promise.all([categorias,marcas,product])
        .then(([rtacategorias,rtamarcas,product])=>{
          return res.render('productos',{
            rtacategorias,
            rtamarcas,
            product,
            toThousand
          });
        }).catch(error=>console.log(error))
        
    },

    filter: (req,res)=>{
        const {categoria,marca} = req.query;
        try {
            let marcas = db.Brands.findAll()
            let categorias = db.categories.findAll()

           if (categoria == 0 && marca != 0) {
           
                let product = db.Productos.findAll({
                    where : {
                        brand_id : marca
                    }
                })
                Promise.all([categorias,marcas,product])
                .then(([rtacategorias,rtamarcas,product])=>{
                return res.render('productos',{
                    rtacategorias,
                    rtamarcas,
                    product,
                    toThousand
                });
                }).catch(error=>console.log(error))

           } else if(marca == 0 && categoria != 0){
                let product = db.Productos.findAll({
                    where : {
                        category_id : categoria
                    }
                })
                Promise.all([categorias,marcas,product])
                .then(([rtacategorias,rtamarcas,product])=>{
                return res.render('productos',{
                    rtacategorias,
                    rtamarcas,
                    product,
                    toThousand
                });
                }).catch(error=>console.log(error))

           }else if(categoria != 0 && marca != 0){
                let product = db.Productos.findAll({
                    where : {
                        category_id : categoria,
                        brand_id : marca
                    }
                })
                Promise.all([categorias,marcas,product])
                .then(([rtacategorias,rtamarcas,product])=>{
                return res.render('productos',{
                    rtacategorias,
                    rtamarcas,
                    product,
                    toThousand
                });
                }).catch(error=>console.log(error))
           }else{
            let product = db.Productos.findAll()
            Promise.all([categorias,marcas,product])
                .then(([rtacategorias,rtamarcas,product])=>{
                return res.render('productos',{
                    rtacategorias,
                    rtamarcas,
                    product,
                    toThousand
                })
            }).catch(error=>console.log(error))

           }

        } catch (error) {
            console.log(error)
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