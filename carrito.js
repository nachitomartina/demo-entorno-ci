// carrito.js
let carrito = [];

function agregarProducto(id, nombre, precio) {
    // Buscamos si el juego ya existe en el carrito
    const juegoExistente = carrito.find(item => item.id === id);

    if (juegoExistente) {
        // Si ya está, solo sumamos 1 a la cantidad
        juegoExistente.cantidad += 1;
    } else {
        // Si no está, lo agregamos como un producto nuevo con cantidad 1
        carrito.push({
            id: id,
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
    }
    return carrito;
}

// Función auxiliar para resetear el carrito entre pruebas
function vaciarCarrito() {
    carrito = [];
}

// Exportamos las funciones para que el robot de pruebas pueda usarlas
module.exports = { agregarProducto, vaciarCarrito, carrito };