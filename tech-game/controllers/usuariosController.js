const path = require('path');
const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');

const {getUsers, setUsers} = require(path.join('..', 'data', 'users'));

const usuarios = getUsers();

module.exports = {
    perfil : (req, res) =>{
        res.render('perfil')
    },
    registro : (req,res)=>{
        res.render('registro');
    },
    processRegistro : (req, res) => {

        const erroresValidacion = validationResult(req);

/*         res.send(erroresValidacion)  /* para ver que me manda */

        if(!erroresValidacion.isEmpty()){
            return res.redirect('/users/registro')
        } else {


        const {name, lastname, email, dni, country, password, password2} = req.body

        if(password != password2){
            return res.redirect('/users/registro')
        } 
        
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
            dni : +dni,
            country,
            password : hashing,
            password2 : hashing2
        }


        usuarios.push(newUser)


        setUsers(usuarios)

         res.redirect('/') 
    }
    },
    inicioSesion : (req,res)=>{
        res.render('login');
    },
    processLogin : (req,res)=>{ 
        let errores = validationResult(req);
        
        if(!errores.isEmpty()){
            return res.render('login',{
                errores: errores.errors
            })
        }else{
            const {email,password,recordar} = req.body;

            let result  = usuarios.find(user => user.email === email);

            if(result){
                if(bcrypt.compareSync(password.trim(),result.password)){

                    req.session.user = {
                        id : result.id,
                        username : result.name,
                    }

                    if(recordar){
                        res.cookie('techGame', req.session.user,{
                            maxAge : 1000 * 60
                        })
                    }

                    return res.redirect('/users/perfil')
                }
            }
            return res.render('login',{
                errores : [
                    {
                        msg : "credenciales invalidas"
                    }
                ]
            })
        }
    },
    profile : (req,res)=>{
        res.render('profile')
    },
}