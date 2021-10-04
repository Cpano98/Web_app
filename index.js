//Importando la biblioteca express
const express = require('express')
const path = require('path') // Windows \  Mac o Linux /
//Cargar el objeto de conexiónn a la base
const sequelize = require('./utils/database')

//Importar rutas
const vjRoutes = require('./routes/videojuegos')
//Crear una aplicación web
const app = express();

//Establecer un middleware que configure donde se encuentran los
//recursos públicos
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.engine('html',require('ejs').renderFile)
app.set('view engine','ejs')

//Vinculamos la aplicación con los recursos de videojuegos
app.use('/videojuegos',vjRoutes);

app.get('/mipagina',(request,response)=>{
    response.sendFile(path.join(__dirname,'views','index.html'))
})

app.get('/formulario',(request,response)=>{
    response.sendFile(path.join(__dirname,'views','form.html'))
})

app.get('/prueba',(request,response)=>{
    response.send("<h1>Esto es una prueba</h1>")
})

app.get('/informacion',(req, res)=>{
    res.send("<h1>Recibiendo información</h1>")
    console.log(req.query)
    console.log(req.query.numPerFav)
})

app.get('/datos/:identificador/:nombre',(req,res)=>{
    res.send("<h1>Recibiendo información 2</h1>")
    console.log(req.params)
    console.log(req.params.nombre)
})

app.post('/prueba/:producto',(req,res)=>{
    res.send("<h1>Datos en el servidor</h1>")
    console.log(req.query)
    console.log(req.params)
    console.log(req.body)
    console.log(req.body.numPerFav2)
    //Cadena de texto concatenada
    console.log("Numero de personajes favoritos:"+req.body.numPerFav)
    //Cadena integrada
    console.log(`${req.body.numPerFav} personajes favoritos`)
})

app.get('/plantillaEJS',(req,res)=>{
    //Simulando una consulta de multiples datos
    const datos=[
        {usuario:'Susana',password:'ewgewg'},
        {usuario:'Pandemio',password:'gewge'},
        {usuario:'Soledad',password:'2343421'},
        {usuario:'Rosa',password:'wegew'},
    ]

    res.render('ejemploPlantilla.html',{
        personas:datos,
        nombre:"Simón",
        edad:25
    })
})

sequelize.sync()
    .then(
        app.listen(8080,()=>{
            console.log("Servidor online en el puerto 8080")
        })
    )
    .catch(err=>console.log(err))


