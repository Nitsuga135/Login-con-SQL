module.exports = function(sequelize, dataTypes){

    let alias = "Usuario";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        } ,
        email:{
            type: dataTypes.STRING(45)
        },
        pais_id:{
            type: dataTypes.INTEGER
        },
        nombreUsuario:{
            type: dataTypes.STRING(45)
        },
        telefono:{
            type: dataTypes.INTEGER
        },
        contrasena:{
            type: dataTypes.STRING(45)
        },
        avatar:{
            type: dataTypes.INTEGER
        },
        genero_id:{
            type: dataTypes.INTEGER
        },
        nombre:{
            type: dataTypes.STRING(45)
        },
        apellido:{
            type: dataTypes.STRING(45)
        }
    }

    const config = {
        tableName: 'usuario',
        timestamps: false
    }
    
    let Usuario = sequelize.define(alias, cols, config);

    //Defino las relaciones
    Usuario.associate = function(models){
        Usuario.belongsTo(models.Genero, {
            as: 'generos',
            foreignKey: 'genero_id'
        })
        
        Usuario.belongsTo(models.Pais, {
            as: 'paises',
            foreignKey: 'pais_id'
        })
    }

    return Usuario;
}