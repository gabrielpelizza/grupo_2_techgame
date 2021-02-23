const path = require('path');
const bcrypt = require('bcrypt');

const {getUsers, setUsers} = require(path.join('..', 'data', 'users'));

const usuarios = getUsers();

module.exports = {
    registro : (req,res)=>{
        res.render('registro');
    },
    processRegistro : (req, res) => {
        const {name, lastname, email, dni, country, password, password2} = req.body

        let lastID = 0;

        usuarios.forEach(element => {
            if(element.id > lastID){
                lastID = element.id
            }
        });

        let hashing = bcrypt.hashSync(password, 10)
        let hashing2 = bcrypt.hashSync(password2, 10)

        let newUser = {
            id: +lastID + 1,
            name,
            lastname,
            email,
            dni,
            country,
            password : hashing,
            password2 : hashing2
        }


        usuarios.push(newUser)

        setUsers(usuarios)

        res.redirect('/')
    },
    inicioSesion : (req,res)=>{
        res.render('login');
    }
}