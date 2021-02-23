const path = require('path');
const bcrypt = require('bcrypt');

const {getUsers, setUsers} = require(path.join('..', 'data', 'users'));

const usuarios = getUsers();

module.exports = {
    registro : (req,res)=>{
        res.render('registro');
    },
    inicioSesion : (req,res)=>{
        res.render('login');
    }
}