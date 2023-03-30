function myProfileMiddleware(req, res, next) {
	let id = parseInt(req.params.id);
	if (req.session.userLogged.id !== id) {
		
		//se encarga de destruir todo lo q esta en session
		req.session.destroy();
		res.clearCookie("userEmail");

        //verifico q el id en session y el id en el param sean iguales si no lo son borra datos y manda a login con credenciales invalidas
       

		return res.redirect('logOut');
	}
	next();
}

module.exports = myProfileMiddleware;
