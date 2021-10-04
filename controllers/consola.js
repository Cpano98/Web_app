const path = require('path');
const Consola = require('../utils/database').models.consola;

/*
exports.getAgregarVideojuego = (req,res)=>{
    res.send("Formulario")
} */

exports.postAgregarConsola = (req,res)=>{
    console.log(req.body); // <= {id: number, nombre: text}
    //console.log(Consola(sequelize));
    Consola.create(req.body)
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

exports.getObtenerConsolas = (req,res)=>{
    Consola.findAll()
        .then(consolas => {
            console.log(consolas);
            res.json(consolas);
        })
        .catch(error => console.log(error));
} 

exports.postBorrarConsola = (req, res) => {
    console.log(req.body);
    Consola.destroy({
        where: {
            id: req.body.id
        }
    })
    .then(() => {
        console.log("Consola eliminada");
        res.json({estado: "aceptado"});
    })
    .catch(error => {
        console.log(error);
        res.json({estado: "Error"});
    });
}

exports.postActualizarConsola = (req, res) => {
    console.log(req.body);
    Consola.update({
        nombre: req.body.nombre
    }, {
        where: {
            id: req.body.id
        }
    })
    .then(() => {
        console.log("Consola actualizada");
        res.json({estado: "aceptado"});
    })
    .catch(error => {
        console.log(error);
        res.json({estado: "Error"});
    });
}
