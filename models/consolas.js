const Sequelize = require('sequelize');
const Consola = (sequelize)=>{
    sequelize.define('consola',{
        id:{
            type: Sequelize.INTEGER, //Varchar(30)
            allowNull: false,
            primaryKey: true 
        },
        nombre: Sequelize.STRING
    })
}
module.exports= Consola