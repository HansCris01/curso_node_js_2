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

  > vamos al archivo: promise.js

  vamos a la linea 23

*/


/*

  ------- Promisify
    
  > vamos al archivo: promise.js

  linea: 39

*/

/*

  ----- fs promises

  > vamos al archivo: promise.js

  linea: 62


*/

/*  ------ events

   ir a la carpeta public/index.html

  > vamos a programar, el archivo index.html
  > comando: npx serve -s public

  _ vamos a crear un archivo: events.js
  _ vamos a programar ese archivo que va ser el modulo de eventos 

*/

/* 
    ----- streams
  > creamos al archivo: streams.js
  > programas el archivo
  > ejecutar el archivo con el comando: node streams.js
*/


/*
   ------ streams vs http

   > vamos a crear el archivo: stream_http.js
   > vamos a programar el archivo
    
*/


/*
   ----- Ecmascript modules

   > vamos al package.json, debajo de "main": "src/app.js", vamos a escribir esto: "type": "module"
   > vamos a crear el archivo: esmodule.js
   > vamos a crear nuestra carpeta y archivo: mi_modulos/moduloPersonalizado.js
   > vamos a programar mi_modulos/moduloPersonalizado.js 
   > vamos a programar esmodule.js
*/



/*  ----- fetch
   
   > vamos a crear un archivo: fetch.js


*/

/*
   ------ Express
   > Vamos a crear un proyecto nodejs3: llamado node-website

*/


