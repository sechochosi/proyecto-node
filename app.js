const express = require('express');
const connectDB = require('./config/database');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Rutas básicas
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// Configurar puerto
const PORT = process.env.PORT || 27017;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto mongodb://localhost:27017/`));

