// prueba-carrito.js
const { agregarProducto, vaciarCarrito } = require('./carrito');
const assert = require('assert');

console.log("Iniciando pruebas automatizadas del Carrito de Compras...");

try {
    // Limpiamos la memoria antes de empezar
    vaciarCarrito();

    // ---------------------------------------------------------
    // PRUEBA A: Agregar un juego nuevo
    // ---------------------------------------------------------
    let estadoCarrito = agregarProducto(1, "Minecraft", 12000);
    assert.strictEqual(estadoCarrito.length, 1, "Error: Debería haber 1 producto en la lista.");
    assert.strictEqual(estadoCarrito[0].cantidad, 1, "Error: La cantidad de Minecraft debería ser 1.");

    // ---------------------------------------------------------
    // PRUEBA B: Límite y acumulación (Agregar el MISMO juego)
    // ---------------------------------------------------------
    estadoCarrito = agregarProducto(1, "Minecraft", 12000);
    // Verificamos que la longitud siga siendo 1 (no se duplicó el registro)
    assert.strictEqual(estadoCarrito.length, 1, "Error: El registro de Minecraft se duplicó en vez de acumularse.");
    // Verificamos que la cantidad haya subido a 2
    assert.strictEqual(estadoCarrito[0].cantidad, 2, "Error: La cantidad de Minecraft no se incrementó a 2.");

    // ---------------------------------------------------------
    // PRUEBA C: Agregar un juego distinto
    // ---------------------------------------------------------
    estadoCarrito = agregarProducto(2, "Resident Evil 4 (2005)", 15000);
    assert.strictEqual(estadoCarrito.length, 2, "Error: Ahora debería haber 2 registros de juegos distintos.");

    console.log("✅ PRUEBAS EXITOSAS: El carrito agrega productos e incrementa cantidades correctamente.");
} catch (error) {
    console.error("❌ FALLO LA PRUEBA:", error.message);
    process.exit(1); // Frena la ejecución si algo falla
}