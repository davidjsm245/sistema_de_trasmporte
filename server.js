//server.js

modulo_cliente
const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('dotenv').config();
const express = require('express');
const cors = require('cors');
//const db = require('./db'); // Importa la conexión a la base de datos
 main

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

modulo_cliente
// Importación de rutas
const authRoutes = require('./routes/auth');
const clienteRoutes = require('./routes/cliente');

// Usar rutas
app.use('/api/auth', authRoutes);
app.use('/api/cliente', clienteRoutes);

// Ruta de ejemplo
app.get('/', (req, res) => {
    res.send('Hola desde el servidor express!');
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);

//Importar rutas 

const authRoutes = require('./routes/auth');
const empresaRoutes = require('./routes/empresa');
const almecenRoutes = require("./routes/almacen");

//const { use } = require('react');

//usa rutas

app.use('/api/auth', authRoutes);
app.use('/api/empresa', empresaRoutes);

//ruta de prueba ejemplo
app.get('/', (req, res) => {
    res.send('Hola, esta es la ruta de prueba del servidor Express');
});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
main
});
