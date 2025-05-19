console.log("Hola mundo");

//ejecutamos con el comando: node app.js

//vamos instalar el paquete colors
//npm i colors
//va estar en el registro de package.json y se va crear la carpeta node_modules

const colors = require('colors');

console.log("Hola".rainbow);

//instalación de paquetes como módulo de desarrollo: npm i nodemon -D


/*
    ------    Módulo globales --------

*/

//si queremos que instale a todo el proyecto como módulo desarrollo escribir: npm i nodemon -g

//si queremos quitar el modo módulo desarrollo escribir el comando: npm remove nodemon -g


/*
    ----- Npx -----

*/

//Si escribo eso : .\node_modules\.bin\nodemon src/app.js
//me va dar información del [nodemon] por consola, mejor dicho va funcionar como programa de consola CLI

//nos quedamos en 2:48



