const express = require("express")
const vjController = require('../controllers/videojuegos')
const router = express.Router()


//Formulario de ingreso de datos
//router.get('/agregarVideojuego',vjController.getAgregarVideojuego)
//Servicio para el procesamiento de los datos
router.post('/agregarVideojuego',vjController.postAgregarVideojuego)
//Pagina de confirmacion
//router.get('/confirmacionDatos',vjController.getConfirmacionDatos)
//Visualización de los datos guardados
router.get('/obtenerVideojuegos',vjController.getObtenerVideojuegos)
//Delete
router.post('/borrarVideojuego', vjController.postBorrarVideojuego);
//Update
router.post('/actualizarVideojuego', vjController.postActualizarVideojuego);

module.exports = router