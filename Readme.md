# Guía de Instalación del Proyecto

## Instalación de Dependencias

Para instalar el proyecto, primeramente hay que instalar las dependencias con:

```bash
npm i
```

## Configuración de Base de Datos

Para cargar la base de datos, usar el archivo `scripts/seed.js` con el comando:

```bash
npm run seed
```

## Instalación de Dependencias Adicionales

Para instalar las librerías de autenticación:

### jsonwebtoken
## para hcer autenticacion
```bash
npm i jsonwebtoken
```

### bcryptjs
## encriptar la contrase;a
```bash
npm i bcryptjs
```

Crear controlador que hace proceso de autenticacion

Quien maneja la logica de negocio?
El servicio

Controller: Maneja HTTP
Service: Lógica de negocio
Repository: Acceso a datos
Model: Estructura de datos

jwt.sign para firmar se necesitan 3 partes
- contenido, que vamos a mostrar del usuario
- cual es el secreto
- tiempo de expiracion
