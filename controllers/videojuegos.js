const path = require('path');
const Videojuego = require('../utils/database').models.videojuego;

/*
exports.getAgregarVideojuego = (req,res)=>{
    res.send("Formulario")
} */

exports.postAgregarVideojuego = (req,res)=>{
    console.log(req.body); // <= {id: number, nombre: text}
    //console.log(Videojuego(sequelize));
    Videojuego.create(req.body)
        .then(resultado => {
            console.log(res);
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

exports.getObtenerVideojuegos = (req,res)=>{
    Videojuego.findAll()
        .then(videojuegos => {
            console.log(videojuegos);
            res.json(videojuegos);
        })
        .catch(error => console.log(error));
} 

exports.postBorrarVideojuego = (req, res) => {
    console.log(req.body);
    Videojuego.destroy({
        where: {
            id: req.body.id
        }
    })
    .then(() => {
        console.log("Videojuego eliminado");
        res.json({estado: "aceptado"});
    })
    .catch(error => {
        console.log(error);
        res.json({estado: "Error"});
    });
}

exports.postActualizarVideojuego = (req, res) => {
    console.log(req.body);
    Videojuego.update({
        nombre: req.body.nombre
    }, {
        where: {
            id: req.body.id
        }
    })
    .then(() => {
        console.log("Videojuego actualizado");
        res.json({estado: "aceptado"});
    })
    .catch(error => {
        console.log(error);
        res.json({estado: "Error"});
    });
}
