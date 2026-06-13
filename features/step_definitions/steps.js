const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let htmlActual = '';

Given('que el servidor esta configurado', function () {
  // Simulamos que el servidor Node.js está listo
});

When('solicito la pagina principal', function () {
  // Simulamos que el servidor nos devuelve una porción del HTML de tu index.html
  htmlActual = '<div class="container"><h1 class="display-4 fw-bold">Bienvenido a GamerZone</h1></div>';
});

Then('la respuesta debe contener {string}', function (textoEsperado) {
  // Verificamos que el texto esperado exista dentro del HTML
  const contieneTexto = htmlActual.includes(textoEsperado);
  assert.ok(contieneTexto, `Error: No se encontró el texto "${textoEsperado}" en la página.`);
});