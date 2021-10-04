const express = require("express")
const convjController = require('../controllers/consolaVideojuego')
const router = express.Router()


//Servicio para el procesamiento de los datos
router.post('/agregarConsolaVideojuego',convjController.postAgregarConsolaVideojuego);

//Visualización de los datos guardados
router.get('/obtenerConsolaVideojuegos',convjController.getObtenerConsolaVideojuegos);
//Delete
router.post('/borrarConsolaVideojuego', convjController.postBorrarConsolaVideojuego);
//Update
router.post('/actualizarConsolaVideojuego', convjController.postActualizarConsolaVideojuego);

module.exports = router