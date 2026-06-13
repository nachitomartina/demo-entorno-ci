Feature: Carga de la Vidriera de la Tienda
  Scenario: El sistema muestra el título principal de la web
    Given que el servidor esta configurado
    When solicito la pagina principal
    Then la respuesta debe contener "Bienvenido a GamerZone"