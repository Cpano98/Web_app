//Tabla intermedia
const Sequelize = require('sequelize');
const consolaVideojuego = (sequelize)=>{
    sequelize.define('consolaVideojuego',{
        idCV:{
            type: Sequelize.INTEGER, //Varchar(30)
            allowNull: false,
            primaryKey: true 
        },
        lanzamiento: Sequelize.STRING
    })
}
module.exports= consolaVideojuego;