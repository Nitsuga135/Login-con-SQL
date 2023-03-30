//requiero las validaciones con destructuracion de express validator
const {validationResult} = require("express-validator");

//llamo la base de datos

let db = require("../database/models")
//requiero bcrypt para las contraseñas
const bcryptjs = require("bcryptjs"); 

const controller = {
    //metodos
    index: async function(req, res){
    
        
        
               res.render("createAcount")
            
        
        
        
       
    },

    register: async function(req, res){

        //llamo a las validaciones q pase por ruta
        let resultValidation = validationResult(req);
        
        function image() {
			let imagen = 'avatarDefault.png';
			if (req.file) {
				return req.file.filename;
			} else {
				return imagen;
			}
		}

        //si hay errores vulve al form y mando errores y oldData
        if(resultValidation.errors.length > 0){
        
            res.render("createAcount",{
                
                errors: resultValidation.mapped(),
                oldData: req.body
            });
            
        }else{
        
            //si NO hay errores

            //verifico si el mail del usuario se encuentra en la base de datos

            db.Usuario.findOne({
                where: {
                    email: req.body.email
                }
            }).then(function(usuarioDb){
                
                if(usuarioDb || usuarioDb == "null" || usuarioDb == "undefined"){
                               console.log("entro") 
                                return res.render("createAcount", 
                                {
                                    errors: {
                                        email: {
                                            msg: "Este email ya está registrado"
                                        }
                                    },
                                    oldData: req.body
                                })
                        
                            }
                            //agrego el avatar al usuario que estoy creando
                            let userToCreate = {
                                email: req.body.email,
                                contrasena: bcryptjs.hashSync(req.body.contrasena, 10),
                                avatar: image(),
                                pais_id: req.body.pais+1,
                                nombreUsuario: req.body.nombreUsuario,
                                telefono: req.body.telefono,
                                genero_id: req.body.genero+1,
                                nombre: req.body.nombre,
                                apellido: req.body.apellido,


                            }   
                            

                            //creo el usuario y redirijo la pagina
                            
                            db.Usuario.create(userToCreate)
                            
                            res.redirect("/login");
            })

            
        }
        
    
        
    }
  
}
module.exports = controller;