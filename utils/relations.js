function aplicarRelaciones(sequelize){
    //Imprimir los modelos relacionados con el objeto de conexión
    console.log(sequelize.models)
    const Videojuego = sequelize.models.videojuego
    const Consola = sequelize.models.consola
    const ConsolaVideojuego = sequelize.models.consolaVideojuego

    //Un videojuego puedes jugarse en muchas consolas
    Videojuego.belongsToMany(Consola,{through:ConsolaVideojuego});
    //Una consola tiene muchos videojuegos
    Consola.belongsToMany(Videojuego,{through:ConsolaVideojuego});
    //Si tuvieran una relación uno a muchos
    /*Supuesto tene una tabla trofeo  un videojuego 
    puede tener muchos trofeos pero un trofeo solo pertenece a un videojuego    
    */
   //Videojuego.hasMany(Trofeo)
   //Trofeo.belongsTo(Videojuego)

}

module.exports = {aplicarRelaciones}