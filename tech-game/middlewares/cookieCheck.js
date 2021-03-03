module.exports = (req,res,next) =>{
    if(req.cookies.techGame){
        req.session.user = req.cookies.techGame
    }
    next()
}