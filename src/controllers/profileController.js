const session = require("express-session");
const { Association } = require("sequelize");
let db = require("../database/models")
const controller = {
    //metodos
    index: function(req, res){

        db.Usuario.findByPk(req.params.id,{
            include:[{association:"paises"},
                {association:"generos"}
                
            ]
        })
            .then(function(usuarios){
                     
                res.render("profile", {user: usuarios})
            })

        
        
    }
  
}
module.exports = controller;