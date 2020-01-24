const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes.js');

const app = express();

mongoose.connect ("mongodb://localhost:27017/tienda", { useNewUrlParser: true } )
    .then( db => console.log("Conexión a BD correcta") )
    .catch( err => console.log("Error al conectar a BD: " + err
    ) );

// app.get("/", (req, res) => {
//     res.send("www.youtube.es")
// });

// app.get("/hola", (req, res) =>
//     res.send("Dirección de Youtube: www.youtube.es")
// );


app.use(express.json());    // IMPORTANTE: Poner esto antes de las rutas
app.use('/api', apiRoutes);



app.listen(3000, () => console.log("Servidor iniciado..."));
