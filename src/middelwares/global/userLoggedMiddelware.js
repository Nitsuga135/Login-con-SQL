const db = require("../../database/models")
const bcrypt = require('bcryptjs');

async function userLoggedMiddelware(req, res, next){

    res.locals.isLogged =  false;
    
    let emailInCookie = req.cookies.userEmail;

    let allUsers = await db.Usuario.findAll();

    function emailFromCookie(emailInCookie){
        if(emailInCookie){

            for(let i = 0; i < allUsers.length; i++){
                
                if(bcrypt.compareSync(
                        
                        allUsers[i].dataValues.email,
                        emailInCookie
                    )
                ){
                    return allUsers[i].dataValues.email
                }else{
                
                    return "undefined";
                }
            }

              
        }
    }
    let userFromCookie;
    if(emailInCookie){

    
        userFromCookie = await db.Usuario.findOne({
	    	where: {
            
		    	email: emailFromCookie(emailInCookie),
		    },
	    });
    }
    if (userFromCookie !== null && userFromCookie !== "undefined" && userFromCookie) {
		req.session.userLogged = userFromCookie.dataValues;
	} else {
		req.session.userLogged;
	}
    if (req.session && req.session.userLogged) {
		res.locals.isLogged = true;
		//Con esto los datos se transforman en datos locales y no datos que vienen de la web.
		res.locals.userLogged = await db.Usuario.findByPk(
			req.session.userLogged.id
		);
	}
    
    next();

}
module.exports = userLoggedMiddelware;