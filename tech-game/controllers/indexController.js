const path = require('path');
const db = require('../database/models');
let fs = require('fs');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    home : (req, res) => {
    let productos=   db.Productos.findAll({
        limit: 8,
      });
    let categorias = db.categories.findAll()
    let descuento = db.Productos.findAll({where:{discount:{[Op.gt]: 0}}})
    Promise.all([productos,categorias,descuento])
      .then(([product,categorias,descuento])=>{
          res.render('index', {
            title: 'Inicio',
            product,
            categorias,
            descuento,
            toThousand
          });
      }) 
    }
}