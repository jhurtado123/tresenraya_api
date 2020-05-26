# Tres en Raya (Api)
Api compuesta por dos endpoints para gestionar una aplicación para jugar al tres en raya\
El servidor corre con Node.js (v13.2) y usa el framework Express.js (v4.16) para la organización del proyecto\
Para los tests se utiliza Mocha (v7.2) y Chai (v4.2)\
Las rutas del proyecto se encuentran en el archivo index.js dentro de la carpeta routes.


## Instalación

- Descargar el respositorio o clonarlo con git clone en la rama master (https://github.com/jhurtado123/tresenraya_api.git)
- Instalar las dependencias ejecutando el comando `npm install` en la raíz del proyecto.
- Crear el archivo de variables de entorno .env con los siguientes valores:\
PORT=3001\
FRONTEND_DOMAIN=http://localhost:3000
- Ejecutar `npm start` para iniciar el servidor
- Ejecutar `npm run test` para ejecutar los tests

**Si de desea inciar el front end en otro puerto hay que indicarselo en la variable de entorno del servidor para evitar problemas relacionados con el CORS**


## Rutas
| Ruta | Metodo | Función |
| ------ | ------ | ------- |
| computerMove | POST | Insertar en el tablero el próximo moviemiento del servidor
| checkBoardStatus | POST | Validar el estado del tablero antes de permitir el siguiente turno  |

