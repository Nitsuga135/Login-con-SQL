//este middelware se encarga de verificar si la persona esta logeada y en caso de no estarlo la envia directamente al login
function authMiddelware(req, res, next){

  
    if(!req.session.userLogged){

        return res.redirect("/login")
    }
    next();
}
module.exports = authMiddelware;