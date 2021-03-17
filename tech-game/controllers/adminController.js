const path = require('path');

/* let fs = require('fs'); */

const db = require('../database/models')

const { validationResult } = require('express-validator');
const { isNullOrUndefined } = require('util');

const {getProduct, setProduct} = require(path.join('..', 'data', 'products'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productos = getProduct();

module.exports = {
  index:(req,res)=>{
    res.render('admin/index'); //home de administracion
  },
  crud : (req, res, next)=>{ //panel de control de productos
      res.render('admin/panelProduct', {
        productos
      });
  },
  createProduct :(req,res)=>{ //muestra el formulario de agregar  con algunos valores de l base de datos
    
    let categorias = db.categories.findAll()
    
    let marcas = db.Brands.findAll()
    
    Promise.all([categorias,marcas])
    .then(([rtacategorias,rtamarcas])=>{
      return res.render('admin/agregarProduct',{
        rtacategorias,
        rtamarcas
      });
    }).catch(error=>console.log(error))
  },

  productAlmacenado:(req,res)=>{
    const {nombre,precio,sku,stock,descuento, descripcion, marcas, categoria, img} = req.body;

    db.Productos.create({
      product_name : nombre,
      price : precio,
      sku : sku,
      stock : stock,
      discount : descuento,
      brand_id : marcas,
      category_id : categoria,
      description : descripcion
      /* image : "2323333.jpg" */
    }).catch(error => console.log(error))
    res.redirect('/')
  },
  deleteProduct : (req, res) =>{
    db.Productos.destroy({
      where : {
        id : req.params.id
      }
    })
    .then(() => res.redirect('/admin/productos'))
    .catch(error => res.send(error))
  }

/*     productAlmacenado : (req,res,next)=>{ //cumple la accion de almacenar lo agregado

      const erroresValidacion = validationResult(req);

      if(!erroresValidacion.isEmpty()){
        return res.render('admin/agregarProduct',{
          errores : erroresValidacion.errors
        });
      }else{
          let lastID = 1;
          productos.forEach(producto => {
              if (producto.id > lastID) {
                  lastID = producto.id
              }
          });
          
          const {nombre,precio,sku,stock,descuento,detalle,descripcion, categoria, marcas} = req.body;


          const newProduct = {
              id: Number(lastID + 1),
              product_name : nombre,
              description : descripcion,
              sku : sku,
              stock : stock,
              price: precio,
              details : detalle,
              category : categoria,
              discount : descuento,
              brand : marcas,
              image : (req.files[0])?req.files[0].filename : "imagenDefault.png" 
          }

          productos.push(newProduct)

          
          setProduct(productos);

          res.redirect('/admin/productos');
      }

    },

    deleteProduct : (req, res, next) => { //cumple la accion de eliminar 
      productos.forEach(elemento => {
        if(elemento.id == req.params.id){
          let eliminar = productos.indexOf(elemento);
          productos.splice(eliminar,1);
        }
      });

      fs.writeFileSync('./data/products.json', JSON.stringify(productos), 'utf-8');
      res.redirect('/admin/productos');
    },
    editarProducto : (req,res)=>{ //muestra fomulario modificar con datos delproducto
      let producto = productos.find(cadaProducto=>{
        return cadaProducto.id === +req.params.id;
      });

      
      //console.log(producto); para verificar si pasa el id
      res.render('admin/editProduct',{
        producto,
        toThousand
      });

    },
    productModificado:(req,res)=>{ // cumple la accion de actualizar los datos del form modificar
      const {nombre,precio,imagen,descuento,detalle,sku,stock,categoria,marca,descripcion} =req.body;
    
      productos.forEach(cadaProducto=>{
        if(cadaProducto.id === +req.params.id){
          cadaProducto.id = Number(req.params.id);
          cadaProducto.product_name = nombre;
          cadaProducto.price = precio ;
          cadaProducto.sku = sku;
          cadaProducto.stock = stock ;
          cadaProducto.category = categoria ;
          cadaProducto.brand = marca ;
          cadaProducto.description = descripcion;
          cadaProducto.details = detalle;
          cadaProducto.image = imagen;
          cadaProducto.discount = descuento ;
        }
      });

      setProduct(productos);
      res.redirect('/admin/productos');
    
    } */
}