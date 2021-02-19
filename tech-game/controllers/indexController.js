const path = require('path');

let fs = require('fs');

const {getProduct} = require(path.join('..', 'data', 'products'));
const product = getProduct();

module.exports = {
    home : (req, res) => {
        res.render('index', { 
          title: 'Inicio',
          product     
        });
      }
}