# 🚀 Node.js con TypeScript y TS-Node-Dev

Configuración rápida y optimizada para proyectos con **Node.js + TypeScript**, utilizando **TS-Node-Dev** como entorno de desarrollo.  
Incluye scripts para ejecutar en modo desarrollo, compilar a JavaScript y levantar en producción.

---

### 📦 Instalación

1. Instalar TypeScript y demás dependencias

```
npm i -D typescript @types/node ts-node-dev rimraf
```

2. Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)

```
npx tsc --init --outDir dist/ --rootDir src
```

3. Crear scripts para dev, build y start ([Más sobre TS-Node-dev aquí](https://www.npmjs.com/package/ts-node-dev))

```
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```

---

### 👀 Observar un servicion

Nos brinda la posibilidad de verificar o ejecutar algo pediodicamente

4. Tareas programadas y cronologicas ([cron](https://www.npmjs.com/package/cron))

```
npm i cron
```

---

### 🌐 Sevidor local

Con Json-Server creamos un servidor local en modo desarrollo

5. Sevicion de desarrollo Jason Server ([json-server](https://www.npmjs.com/package/json-server?activeTab=readme))

```
npm i json-server
```

### 🌐 Para Variables de estados con templates

6. configurar variables de estado con templates

```
npm install env-var
```

---

---

---

# 🐳 Implementación de MongoDB con Docker

Este archivo explica cómo configurar y ejecutar una instancia de MongoDB utilizando Docker Compose.
Ideal para entornos de desarrollo o pruebas locales.

### 📦 Archivo docker-compose.yml

```
version: '3.8'

services:
  mongo-db:
    image: mongo:8.0.12
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: ${MONGO_USER}
      MONGO_INITDB_ROOT_PASSWORD: ${MONGO_PASS}
    volumes:
      - ./mongo:/data/db
    ports:
      - 27017:27017

  postgres-db:
    image: postgres:15.3
    restart: always
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_DB: ${POSTGRES_DB}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
    volumes:
      - ./postgres:/var/lib/postgresql/data
    ports:
      - 5432:5432

```

### ⚙️ Variables de entorno

Asegúrate de tener un archivo .env en la raíz del proyecto con las siguientes variables:

```
MONGO_USER=jhon
MONGO_PASS=123456
```

Estas credenciales serán utilizadas para crear el usuario administrador en la base de datos.

### 🚀 Comandos útiles

Verificar archivos:

Antes de iniciar, confirmá que el archivo docker-compose.yml se encuentra en la raíz del proyecto:

```
dir        # En Windows
# o
ls         # En Linux / macOS
```

Verificar instalación de Docker

```
docker --version
```

### Iniciar MongoDB con Docker

Ejecuta el servicio:

```
docker compose up
```

Esto descargará la imagen y creará el contenedor de MongoDB.

Para ejecutarlo en segundo plano:

```
docker compose up -d
```

Detener el servicio:
Apaga y elimina los contenedores creados:

```
docker compose down
```

💥 Esto sí borra los volúmenes, o sea, toda la información de la base de datos guardada.
(El equivalente a formatear tu MongoDB, perderías todos los registros).

```
docker compose down -v

```

### 🧹 Solución de problemas

Si el contenedor se apaga inmediatamente después de iniciar (exited with code 0), eliminá la carpeta ./mongo y levantá nuevamente el servicio:

```
docker compose down
rmdir /s /q mongo
docker compose up -d
```

### 🧩 Notas

- El volumen ./mongo:/data/db guarda los datos de forma persistente en tu máquina local.
- Si preferís que Docker maneje el almacenamiento automáticamente, podés reemplazar la sección de volúmenes por:

```
volumes:
  - mongo-data:/data/db

volumes:
  mongo-data:
```

- Nota:
  apagar postgres local cuando uso docker

```
net stop postgresql-x64-15

```
