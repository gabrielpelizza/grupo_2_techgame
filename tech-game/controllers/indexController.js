const path = require('path');
const db = require('../database/models');
let fs = require('fs');

const {getProduct} = require(path.join('..', 'data', 'products'));
const product = getProduct();
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    home : (req, res) => {
      db.Productos.findAll()
            .then((product)=>{
                res.render('index', {
                  title: 'Inicio',
                  product,
                  toThousand
                });
      }) 
    }
}