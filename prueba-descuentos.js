const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log("Iniciando auditoría de vidriera (Descuentos en HTML para todo el catálogo)...");

// 1. Reglas de la campaña comercial global
const porcentajeDescuento = 20; // 20% de descuento a toda la tienda

// 2. Nuestro catálogo con los precios originales (sin descuento)
const catalogo = [
    { nombre: "Resident Evil 4 (2005)", precioBase: 15000 },
    { nombre: "Minecraft", precioBase: 12000 },
    { nombre: "FIFA 14", precioBase: 8500 },
    { nombre: "Wii Sports Resort", precioBase: 10000 }
];

try {
    // 3. El robot abre y lee tu archivo HTML físico una sola vez
    const rutaHtml = path.join(__dirname, 'index.html');
    const contenidoHtml = fs.readFileSync(rutaHtml, 'utf-8');

    // 4. Recorremos juego por juego para auditarlos todos
    for (const juego of catalogo) {
        
        // Calculamos el descuento matemático
        const calculoDescuento = juego.precioBase * (porcentajeDescuento / 100);
        const precioFinal = juego.precioBase - calculoDescuento;

        // Convertimos el número al formato visual exacto del HTML. 
        // toLocaleString('es-AR') le pone el punto separador de miles.
        const textoEsperado = "$ " + precioFinal.toLocaleString('es-AR'); 

        // El Juez verifica si ese texto exacto existe dentro del HTML
        const tienePrecioCorrecto = contenidoHtml.includes(textoEsperado);
        
        // Si no lo encuentra, hace estallar la prueba indicando QUÉ juego falló
        assert.ok(
            tienePrecioCorrecto, 
            `Error crítico en ${juego.nombre}: El HTML no muestra el precio ofertado (${textoEsperado}).`
        );
    }

    console.log("✅ PRUEBA DE DESCUENTO EXITOSA: Los 4 juegos reflejan el descuento correctamente.");
} catch (error) {
    console.error("❌ FALLO LA PRUEBA DESCUENTO: los precios no son correctos.", error.message);
    process.exit(1); 
}