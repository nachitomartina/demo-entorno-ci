Feature: Mensaje de inicio de la API
  Scenario: El sistema devuelve el mensaje correcto
    Given que el servidor esta configurado
    When solicito el saludo principal
    Then la respuesta debe ser "¡Hola! El entorno de Integración Continua funciona perfectamente."