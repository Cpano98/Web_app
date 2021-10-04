const Sequelize = require('sequelize');
const Videojuego = (sequelize)=>{
    sequelize.define('videojuego',{
        id:{
            type: Sequelize.INTEGER, //Varchar(30)
            allowNull: false,
            primaryKey: true 
        },
        nombre: Sequelize.STRING
    })
}
module.exports= Videojuego;