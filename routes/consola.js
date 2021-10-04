const express = require("express")
const conController = require('../controllers/consola')
const router = express.Router()



//Servicio para el procesamiento de los datos
router.post('/agregarConsola',conController.postAgregarConsola);

//Visualización de los datos guardados
router.get('/obtenerConsola',conController.getObtenerVideojuegos);
//Delete
router.post('/borrarConsola', conController.postBorrarConsola);
//Update
router.post('/actualizarConsola', conController.postActualizarConsola);

module.exports = router