// server.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// FRONTEND_URL se define en Render (ej: https://tu-frontend.vercel.app)
// Si no existe la variable (ej: en local), permite cualquier origen.
const corsOptions = process.env.FRONTEND_URL
  ? { origin: process.env.FRONTEND_URL }
  : {};
app.use(cors(corsOptions));
app.use(express.json());

// Importación de rutas
const authRoutes = require('./routes/auth');
const clienteRoutes = require('./routes/cliente');
const empresaRoutes = require('./routes/empresa');
const almacenRoutes = require('./routes/almacen');

// Usar rutas
app.use('/api/auth', authRoutes);
app.use('/api/cliente', clienteRoutes);
app.use('/api/empresa', empresaRoutes);
app.use('/api/almacen', almacenRoutes);

// Ruta principal (sirve para comprobar que el backend está vivo)
app.get('/', (req, res) => {
    res.send('API sistema_de_trasmporte funcionando correctamente');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});