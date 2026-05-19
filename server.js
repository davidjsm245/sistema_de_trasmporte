//server.j

require('dotenv').config();
const express = require('express');
const cors = require('cors');
//const db = require('./db'); // Importa la conexión a la base de datos

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//Importar rutas 

const authRoutes = require('./routes/auth');
const empresaRoutes = require('./routes/empresa');

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
});