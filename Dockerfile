# 1. Usar la misma versión de Node que configuramos en GitHub Actions
FROM node:22-alpine

# 2. Crear una carpeta de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar los archivos de configuración de dependencias
COPY package*.json ./

# 4. Instalar las dependencias (Express, etc.) dentro del contenedor
RUN npm install

# 5. Copiar el resto de tu código (index.js, features, etc.)
COPY . .

# 6. Avisar que la aplicación usa el puerto 3000
EXPOSE 3000

# 7. El comando para arrancar la aplicación
CMD ["node", "index.js"]