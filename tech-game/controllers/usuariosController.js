const path = require('path');
const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');

const {getUsers, setUsers} = require(path.join('..', 'data', 'users'));

const usuarios = getUsers();

let db = require('../database/models');

module.exports = {
    perfil : (req, res) =>{
        res.render('perfil')
    },
    registro : (req,res)=>{
        res.render('registro');
    },
    processRegistro : (req, res) => {

        const erroresValidacion = validationResult(req);

        if(!erroresValidacion.isEmpty()){
            return res.render('registro',{
                errores : erroresValidacion.mapped(),
                old : req.body
            })
        } else {
/*         res.send(erroresValidacion)  /* para ver que me manda */
        }

      if(erroresValidacion.isEmpty()){
            const {name, lastname, email, dni, country, password} = req.body

            db.Usuarios.create({   /* se pone el nombre de la columna de la tabla */
                name : name.trim(),
                lastname : lastname.trim(),
                email,
                dni : dni.trim(),
                country : country.trim(),
                password : bcrypt.hashSync(password, 10),
                rol_id : 2
            })
            .then(()=> res.redirect('/users/login'))
            .catch(error => console.log(error))



        } else {
            console.log(erroresValidacion)
            return res.render('registro',{
                errores : erroresValidacion.mapped(),
                old : req.body
            })
        }


      /*   const {name, lastname, email, dni, country, password, password2} = req.body
        
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
 */
        /*  res.redirect('/users/login')  */
    },
    inicioSesion : (req,res)=>{
        res.render('login');
    },
    processLogin : (req,res)=>{ 
        let errores = validationResult(req);
        
        if(errores.isEmpty()){ 

            const {email,password,recordar} = req.body;

            db.Usuarios.findOne({
                where: {
                    email : email,
                }
            })
            .then(usuario => {
                return result = usuario
            })
            .then(result => {
                if(result){
                    if(bcrypt.compareSync(password.trim(),result.password)){
    
                        req.session.user = {
                            id : result.id,
                            username : result.name,
                            rol_id : result.rol_id,
                            id : result.id
                        }
    
                        if(recordar){
                            res.cookie('techGame', req.session.user,{
                                maxAge : 1000 * 60
                            })
                        }
                        res.redirect('/');
                    }
                }
                return res.render('login',{
                    errores : [
                        {
                            msg : "credenciales invalidas"
                        }
                    ]
                })
            }).catch(error => console.log(error))         
            
        }else{
            return res.render('login',{
                errores: errores.errors
            })
        }
    },
    cerrarSesion : (req,res)=>{
        req.session.destroy();

        if(req.cookies.techGame){
            res.cookie('techGame','',{
                maxAge: -1
            });
        }
        res.redirect('/');
    },
    //---------------- operacion con el perfil del usuario-------------------
    perfilUser:(req,res)=>{
        db.Usuarios.findByPk(req.params.id)
        .then(usuario =>{
            return res.render('perfil', {
                usuario
            })
        })
        .catch(error => res.send(error))
    },
    perfilEditadoUser:(req,res)=>{

         const {name, lastname, email, dni, country} = req.body

        db.Usuarios.update({
            name : name.trim(),
            lastname : lastname.trim(),
            email :email.trim(),
            dni : +dni,
            country : country.trim()
        },
        {
            where : {
                id : req.params.id
            }
        })

        .then(() =>{
            res.redirect('/')
        })
        .catch(error => res.send(error))
        /* const {name,lastname,email,dni,country} = req.body;

        usuarios.forEach(user=>{
            if(user.id === +req.params.id ){
                user.id = Number(req.params.id);
                user.name =  name;
                user.lastname = lastname;
                user.email = email;
                user.dni = +dni;
                user.country = country;
            }
        });

        setUsers(usuarios);
        
        const usuario = usuarios.find(cadauser=>cadauser.id === +req.params.id);
        res.render('perfil',{
            usuario
        }); */
    }

}