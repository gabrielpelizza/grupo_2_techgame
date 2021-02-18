const fs = require('fs');
const path = require('path');
const productos_db = path.join('data', 'products.json');

module.exports = {
    getProduct : () =>{
        return JSON.parse(fs.readFileSync(productos_db, 'utf-8'))
    },
    setProduct : (data) => {
        return fs.writeFileSync(productos_db,JSON.stringify(data,null,2),'utf-8');
    }
}