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

/* vamos a instalar el módulo : npm i cowsay

vamos a ir a: node_modules/.bin 

vamos a encontrar a: cowsay.cmd

vamos usar la consola cli para probar el cowsay.cmd

comando en consola: .\node_modules\.bin\cowsay Hola mundo

vamos a package.json  para agregar este codigo en scripts :

"scripts": {
    "divaca": "cawsay Hola mundo"
}

ejecutamos en el comando: npm run divaca

Si queremos quitar el módulo, escribimos el comando: npm remove cowsay


escribir comando: npx cowsay curso de node
escribimos: y  

le damos enter.

SERVIDOR WEB 

> vamos a crear la carpeta y archivo: public/index.html
> programamos el archivo index.html

vamos escribir este comando en la consola: npx serve public
escribimos: y


*/


/*

   Event Loop
   
   > vamos a crear el archivo: event_loop.js
   > vamos a programar
   


*/


/*
    ----- Promises ------  

    Creas el archivo: promise.js
   
    vamos a crear una carpeta y el archivo: data/archivo1.txt
    tambien hay que crear el archivo2 dentro de la carpeta data
   
    vamos a programar el archivo: promise.js
*/


/*

   ------  Async/await  ------

*/
