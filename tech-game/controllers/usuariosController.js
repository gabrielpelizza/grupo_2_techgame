const path = require('path');
const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');
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
                                maxAge : 2000 * 60 * 60
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

        const profileValidation = validationResult(req)

        
        if(profileValidation.isEmpty()){

         const {name, lastname, dni, country} = req.body

        db.Usuarios.update({
            name : name.trim(),
            lastname : lastname.trim(),
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
    } else {
        db.Usuarios.findByPk(req.params.id)
        .then(usuario =>{
            return res.render('perfil', {
                usuario,
                errores : profileValidation.mapped(),
                old : req.body
            })
        })
        .catch(error => res.send(error))
    }
},
eliminarUser: (req,res)=>{
    db.Usuarios.destroy({
        where : {
          id : req.params.id
        }
      })
      .then(() => {
        req.session.destroy();

        if(req.cookies.techGame){
            res.cookie('techGame','',{
                maxAge: -1
            });
        }
        res.redirect('/');
    })
      .catch(error => console.log(error))
}

}