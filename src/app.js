const express = require('express');
const userRoutes = require('./routes');

const app = express();
app.use(express.json()); // Middleware para parsear JSON en el cuerpo de las solicitudes

// Utilizar las rutas definidas en 'routes/index.js'
app.use('/api', userRoutes);

// Definir el puerto y poner el servidor a escuchar
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
