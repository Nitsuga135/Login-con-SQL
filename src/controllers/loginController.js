//llamo los modelos
const db = require("../database/models")

//requiero bcryptjs
const bcryptjs = require("bcryptjs"); 

//requiero las validaciones con destructuracion de express validator
const {validationResult} = require("express-validator");

const controller = {
    //metodos
    index: function(req, res){

        
        res.render("login")
        
    },
    loginProcess: function(req, res){
        
        //EXPRESS VALIDATOR
          //llamo a las validaciones q pase por ruta
          const resultValidation = validationResult(req);

          //si hay errores vulve al form y mando errores y oldData
          if(resultValidation.errors.length > 0){
          
              res.render("login",{
                  
                  errors: resultValidation.mapped(),
                  oldData: req.body
              });
              
          }else{
                //VERIFICAR SIN EXPRESS VALIDATOR
                let emailIngresado = req.body.email.toLowerCase();

                //verifico el usuario en la base de datos
                db.Usuario.findOne({
                    where: {
                        "email": emailIngresado
                    }
                }).then(function(userToLogin){
                     
                    //si el usuario existe      
                    if(userToLogin){

                        //verifico si la contraseña es la misma
                        let verificarContrasena = bcryptjs.compare(
                            req.body.contrasena, userToLogin.contrasena
                        );
                        if(verificarContrasena){
                            //elimino contraseña y meto usuario en session
                            delete userToLogin.contrasena;
                            req.session.userLogged = userToLogin;

                            //verifico si quiere recordar el usuario
                            if(req.body.recordar){
                                res.cookie("userEmail",
                                    bcryptjs.hashSync(userToLogin.email, 10),
                                        {maxAge: 1000*60*2}
                                );
                            }
                            return res.redirect("profile/"+userToLogin.id);
                        }else{
                             //verifico contraseña
                            return res.render("login", {
                                errors: {
                                    email: {msg: "Credenciales InvalidasC"}
                                }
                            })
                        }
                    }else{
                         //si el email no existe en la base de datos
                        return res.render("login", {
                            errors: {
                                email: { msg: "Credenciales Invalidas"}
                            }
                        })
                    }
                })
            }    
               
        
        
    },
    logOut: function(req, res){
        
        //se encarga de destruir una cookie especifica
        res.clearCookie("userEmail");

        //se encarga de destruir todo lo q esta en session
        req.session.destroy();
        
        res.redirect("/");
    }
  
}
module.exports = controller;