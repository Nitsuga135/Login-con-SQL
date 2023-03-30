module.exports = function(sequelize, dataTypes){

    let alias = "Pais";

    let cols = {
        id:{
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER            
            
        } ,
        pais:{
            type: dataTypes.STRING
        }
    }

    const config = {
        tableName: 'pais',
        timestamps: false
    }
    
    let Pais = sequelize.define(alias, cols, config);

    //Defino relaciones

    Pais.associate = function(models){
        Pais.hasMany(models.Usuario, {
            as: "paises",
            foreignKey: "id"
        })
    }


    return Pais;
}