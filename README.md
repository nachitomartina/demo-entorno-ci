# 🎮 GamerZone - Infraestructura CI/CD y Comercio Electrónico

Este proyecto es una plataforma de venta de videojuegos (GamerZone) diseñada en un entorno de integración continua (CI)

## 🛠️ Stack Tecnológico y Herramientas

| Categoría | Herramienta | Propósito en el Proyecto |
| :--- | :--- | :--- |
| **Backend & Motor** | Node.js / Express | Servidor web y ejecución de la lógica de negocio. |
| **Control de Calidad** | Node `assert` nativo | Pruebas unitarias de alta velocidad para el motor de ventas y auditoría visual de descuentos. |
| **CI/CD (Automatización)** | GitHub Actions | Servidor de Integración Continua. Orquesta las pruebas, el empaquetado y las notificaciones. |
| **Contenedores** | Docker | Empaquetado hermético de la aplicación para garantizar consistencia en cualquier entorno. |
| **Entorno de Entrega** | Render | Plataforma de alojamiento en la nube (PaaS) que ejecuta el Despliegue Continuo. |
| **Mecanismo de Feedback** | SMTP / GitHub Secrets | Sistema de alertas por correo electrónico para reportar el estado de las compilaciones. |
| **Inspección de Código** | SonarQube |

---

## ⚙️ Arquitectura del Pipeline CI/CD

El proyecto utiliza una tubería automatizada de Integración y Despliegue Continuo estructurada en fases estrictas para proteger el entorno de producción:

1. **Activación (Push):** Cada cambio de código enviado a la rama `main` enciende el servidor virtual en la nube.
2. **Auditoría de Negocio (Testing):**
   * **Prueba del Carrito (`prueba-carrito.js`):** Valida matemáticamente el control de inventario y la suma correcta de productos (evitando duplicaciones y controlando el incremento de cantidades).
   * **Auditoría Visual (`prueba-descuentos.js`):** Un robot rastrea el archivo HTML físico para asegurar que las campañas comerciales (ej. 20% de descuento) se reflejen de manera exacta en la interfaz que ve el cliente.
3. **Mecanismo de Feedback Automático:** * En caso de éxito, se emite un correo verde de aprobación.
   * En caso de fallo crítico en las reglas de negocio, la tubería se aborta (Fail-Fast) y se envía un correo de alerta con el enlace directo al registro del error, evitando que el código defectuoso llegue a los clientes.
4. **Despliegue Continuo Inteligente (Deploy Hook):** Solo si el control de calidad aprueba al 100%, GitHub envía una señal encriptada (Webhook) al entorno de entrega. Render descarga la nueva imagen y realiza un despliegue **Zero-Downtime** (sin tiempo de inactividad), asegurando que la tienda no pierda ventas durante la actualización.

---

## 🚀 Instalación y Ejecución Local

Para clonar y auditar este proyecto en un entorno local:

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/gamerzone.git](https://github.com/tu-usuario/gamerzone.git)

2. Instalar las dependencias
    ```bash
    npm install

3. Ejecutar pruebas unitarias
    ```bash
    npm test

4. Levantar el servidor de forma local
    ```bash
    npm start
Estará disponible en http://localhost:3000

## 🛡️ Estructura de Seguridad
Las credenciales de correo electrónico y la URL del disparador de Render se administran exclusivamente mediante GitHub Secrets, garantizando que ninguna clave sensible quede expuesta en el código fuente.

## 🥇 Enlaces importantes
Render (servicio de página web): https://dashboard.render.com/web/srv-d8pdpck8aovs73efv5jg/events
SonarQube (inspección de código): https://sonarcloud.io/projects
