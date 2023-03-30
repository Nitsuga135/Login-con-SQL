//Verificasi hay una persona logeada en la pagina en caso de q este logeada no la deja ingresar y la envia al profile
//esto es para q no pueda logearse o entrar en crear cuenta cuando ya hay alguien en session
function guestMiddelware(req, res, next){

    if(req.session.userLogged){

        return res.redirect(`profile/${req.session.userLogged.id}`)
    }
    next();
}
module.exports = guestMiddelware;