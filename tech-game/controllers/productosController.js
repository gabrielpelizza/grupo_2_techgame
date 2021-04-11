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
        const {categoria,marca,orden} = req.query;
        try {
            let marcas = db.Brands.findAll()
            let categorias = db.categories.findAll()
            let existe;
            if(categoria && marca && orden){
            existe = true;
            }
            let product = [];
            /* ordenadosPeliculas.sort(function(a,b){
			return((a.vote_average<b.vote_average)? 1:((a.vote_average>b.vote_average)?-1:0));
            }); */
            switch (true) {
                case categoria && marca  && orden == 1 : // precios de mayor 
                       
                            if(categoria == 0 && marca != 'undefined' && orden == 1){
                                       product = db.Productos.findAll({
                                        order : [
                                            ['price','DESC']
                                        ],
                                        where : {
                                            brand_id : marca
                                        }
                                    });   
                             } else if(categoria != 0 && marca == 0 && orden == 1){
                                product = db.Productos.findAll({
                                    order : [
                                        ['price','DESC']
                                    ],
                                    where : {
                                        category_id : categoria
                                    }
                                }); 
                             }else if (categoria != 0 && marca != 0 && orden == 1){
                                product = db.Productos.findAll({
                                    order : [
                                        ['price','DESC']
                                    ],
                                    where : {
                                        brand_id : marca,
                                        category_id : categoria
                                    }
                                })
                             }
                    ;break;
                    case categoria && marca && orden == 2 :
                        if(categoria == 0 && marca != 0 && orden == 2){
                            product = db.Productos.findAll({
                             order : [
                                 ['price','ASC']
                             ],
                             where : {
                                 brand_id : marca
                             }
                             });   
                        } else if(categoria != 0 && marca == 0 && orden == 2){
                            product = db.Productos.findAll({
                                order : [
                                    ['price','ASC']
                                ],
                                where : {
                                    category_id : categoria
                                }
                            }); 
                        }else if (categoria != 0 && marca != 0 && orden == 2){
                            product = db.Productos.findAll({
                                order : [
                                    ['price','ASC']
                                ],
                                where : {
                                    brand_id : marca,
                                    category_id : categoria
                                }
                            })
                        }
                    ;break;

                    case marca && categoria && (orden != 1 || orden != 2) : 
                            if(marca != 0 && categoria == 0 && (orden != 1 || orden != 2)){
                                product = db.Productos.findAll({
                                    where : {
                                        brand_id : marca
                                    }
                                })
                            }else if(marca == 0 && categoria != 0 && (orden != 1 || orden != 2)){
                                product = db.Productos.findAll({
                                    where : {
                                        category_id : categoria
                                    }
                                })
                            }else if(categoria != 0 && marca != 0 && (orden != 1 || orden != 2)){
                                product = db.Productos.findAll({
                                    where:{
                                        brand_id : marca,
                                        category_id : categoria
                                    }
                                })
                            }
                    ;break;
                    case categoria == 0 && marca == 0 && orden == 0 :        
                            if(categoria==0 && marca==0 && orden == 0){
                                product = [];
                            }
                    ;break;
                    
            
                    
            }
            
            Promise.all([categorias,marcas,product])
            .then(([rtacategorias,rtamarcas,product])=>{
             return res.render('productos',{
                rtacategorias,
                rtamarcas,
                product,
                toThousand
            });
            }).catch(error=>console.log(error))   
                        
            
          //---------------------------------------------------

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