const path = require('path');
const ConsolaVideojuego = require('../utils/database').models.consolaVideojuego;

/*
exports.getAgregarVideojuego = (req,res)=>{
    res.send("Formulario")
} */

exports.postAgregarConsolaVideojuego = (req,res)=>{
    console.log(req.body); // <= {id: number, nombre: text}
    //console.log(ConsolaVideojuego(sequelize));
    ConsolaVideojuego.create(req.body)
        .then(resultado => {
            console.log(resultado);
            res.json({estado: 'aceptado'});
        })
        .catch(error => {
            console.log(error);
            res.json({estado: 'aceptado'});
        });
    //res.redirect('/videojuegos/confirmacionDatos');
}

/*
exports.getConfirmacionDatos = (req,res)=>{
    res.send("Confirmacion")
} */

exports.getObtenerConsolaVideojuegos = (req,res)=>{
    ConsolaVideojuego.findAll()
        .then(consolaVideojuegos => {
            console.log(consolaVideojuegos);
            res.json(consolaVideojuegos);
        })
        .catch(error => console.log(error));
} 

exports.postBorrarConsolaVideojuego = (req, res) => {
    console.log(req.body);
    ConsolaVideojuego.destroy({
        where: {
            idCV: req.body.idCV
        }
    })
    .then(() => {
        console.log("ConsolaVideojuego eliminada");
        res.json({estado: "aceptado"});
    })
    .catch(error => {
        console.log(error);
        res.json({estado: "Error"});
    });
}

exports.postActualizarConsolaVideojuego = (req, res) => {
    console.log(req.body);
    ConsolaVideojuego.update({
        lanzamiento: req.body.lanzamiento
    }, {
        where: {
            idCV: req.body.idCV
        }
    })
    .then(() => {
        console.log("ConsolaVideojuego actualizada");
        res.json({estado: "aceptado"});
    })
    .catch(error => {
        console.log(error);
        res.json({estado: "Error"});
    });
}
