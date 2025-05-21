/*
console.log('first');

setTimeout(() => {
   console.log('second');
}, 3000);

console.log('third');
*/

//En la consola va generar muchos numeros aleatorios, en la ruta about

const http  = require('http');

const server = http.createServer((req, res) => {

   if(req.url === '/'){
      res.write('Bienvenido al Servidor');
      return res.end();
   }

     if(req.url === '/about'){
      

      for (let i = 0; i < 100000; i++){
           console.log(Math.random() * i);
      }

     return res.end("Sobre esta página web");

   }
   
   res.end('No se encuentra la página web');
});

server.listen(3000);
console.log('Server on port 3000');