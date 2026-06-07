const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola! El entorno de Integración Continua funciona perfectamente.');
});

app.listen(port, () => {
  console.log(`Aplicación de prueba escuchando en http://localhost:${port}`);
});