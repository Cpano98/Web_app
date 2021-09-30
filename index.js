const express = require('express');
const app = express();

app.get('/prueba', (req, res) =>{
    res.send("Prueba del servidor funcionando");
});

app.listen(8080, ()=>{
    console.log("Servidor corriendo en el servidor 8080");
});