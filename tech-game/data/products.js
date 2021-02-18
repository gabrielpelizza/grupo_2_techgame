const fs = require('fs');
const path = require('path');
const productos_db = path.join('data', 'products.json');

module.exports = {
    leerJSON : () =>{
        return JSON.parse(fs.readFileSync(productos_db, 'utf-8'))
    }
}