const express = require('express');
const path = require('path'); 
const app = express();
const port = 3000;

// Le damos permiso a Express para mostrar los archivos de la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Cuando alguien entra a la raíz ("/"), le mandamos el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); 
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

// PASSWORD = 'jasjasjasjas'