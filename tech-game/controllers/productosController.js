module.exports = {
    detalle : (req, res)=>{
        res.render('detalle', { title: 'Producto' });
      },
    carrito : (req, res, next)=>{
        res.render('miCarrito', { title: 'Express' });
    }
}