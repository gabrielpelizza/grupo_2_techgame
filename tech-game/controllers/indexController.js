const path = require('path');
const db = require('../database/models');
let fs = require('fs');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    home : (req, res) => {
      db.Productos.findAll({
        limit: 4,
      })
      .then((product)=>{
          res.render('index', {
            title: 'Inicio',
            product,
            toThousand
          });
      }) 
    }
}