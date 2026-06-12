const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola! La API de nuestro eCommerce está en línea y testeada.');
});

app.listen(port, () => {
  console.log(`Aplicación de prueba escuchando en http://localhost:${port}`);
});