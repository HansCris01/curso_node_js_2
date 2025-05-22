const http = require('http');
const {createReadStream} = require('fs');
const { error } = require('console');

const server = http.createServer((req, res) => {
     const fileStream = createReadStream('./data/bigfile.txt', {
        econding: 'utf-8'
     });

     fileStream.on('data', (chunk) => {
        fileStream.pipe(res)
     })

     fileStream.on('error', error => {
        console.log(error);
     })
})

server.listen(3000);
console.log(`server on port ${3000}`);

//ejecutar el comando: node stream_http.js