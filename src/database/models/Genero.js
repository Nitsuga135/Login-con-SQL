module.exports = function(sequelize, dataTypes){

    let alias = "Genero";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        } ,
        genero:{
            type: dataTypes.STRING
        }
    }

    const config = {
        tableName: 'genero',
        timestamps: false
    }
    
    let Genero = sequelize.define(alias, cols, config);

    //Defino asociaciones

    Genero.associate = function(models){
        Genero.hasMany(models.Usuario, {
            as: "generos",
            foreignKey: "id"
        })
    }


    return Genero;
}