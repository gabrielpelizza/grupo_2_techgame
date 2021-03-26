module.exports = (req,res,next) =>{
    if (!req.session.user){
        res.redirect('/users/login')
    }else if(req.session.user.rol_id == 1){
        next()
    }else if(req.session.user.rol_id == 2) {
        res.redirect('/')
    }else{
        res.redirect
    }
}