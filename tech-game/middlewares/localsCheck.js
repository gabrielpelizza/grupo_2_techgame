module.exports = (req,res,next) =>{
    if(req.session.techGame){
        res.locals.user = req.session.techGame
    }
    next()
}