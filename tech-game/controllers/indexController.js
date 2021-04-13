const path = require('path');
const db = require('../database/models');
let fs = require('fs');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    home : (req, res) => {
    let productos=   db.Productos.findAll({
        limit: 8,
      });
    let categorias = db.categories.findAll()
    Promise.all([productos,categorias])
      .then(([product,categorias])=>{
          res.render('index', {
            title: 'Inicio',
            product,
            categorias,
            toThousand
          });
      }) 
    }
}