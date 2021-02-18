const path = require('path');

let fs = require('fs');

const {getProduct, setProduct} = require(path.join('..', 'data', 'products'));



const productos = getProduct();

module.exports = {
    crud : (req, res, next)=>{
        res.render('admin/crud', {
          productos
        });
    },

    createProduct : (req,res,next)=>{
        
        

        let lastID = 1;
        productos.forEach(producto => {
            if (producto.id > lastID) {
                lastID = producto.id
            }else{
              res.send("error ")
            }
        });
        
        const {nombre,precio,sku,stock,descuento,detalle,descripcion,img, categoria, marcas} = req.body;


        const newProduct = {
            id: Number(lastID + 1),
            product_name : nombre,
            description : descripcion,
            sku : sku,
            image : img,
            stock : stock,
            price: precio,
            details : detalle,
            category : categoria,
            discount : descuento,
            brand : marcas
            /* img : req.files[0].filename */
        }

        productos.push(newProduct)

        
        setProduct(productos);

        res.redirect('/admin',{
          alerta
        });

    },

    deleteProduct : (req, res, next) => {
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