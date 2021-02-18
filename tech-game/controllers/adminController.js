const path = require('path');

let fs = require('fs');

const {leerJSON} = require(path.join('..', 'data', 'products'));

const productos = leerJSON();

module.exports = {
    crud : (req, res, next)=>{
        res.render('admin/crud', {
          productos
        });
      },
    delete : (req, res, next) => {
      productos.forEach(elemento => {
        if(elemento.id == req.params.id){
          let eliminar = productos.indexOf(elemento);
          productos.splice(eliminar,1)
        }
      });

      fs.writeFileSync('./data/products.json', JSON.stringify(productos), 'utf-8');
      res.redirect('/admin')
      } 
}