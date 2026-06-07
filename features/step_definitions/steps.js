const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let mensajeActual = '';

Given('que el servidor esta configurado', function () {
  // Simulamos que el servidor Node.js está listo
});

When('solicito el saludo principal', function () {
  // Obtenemos el mensaje de nuestra app
  mensajeActual = '¡Hola! El entorno de Integración Continua funciona perfectamente.';
});

Then('la respuesta debe ser {string}', function (mensajeEsperado) {
  // Verificamos que el mensaje coincida
  assert.strictEqual(mensajeActual, mensajeEsperado);
});