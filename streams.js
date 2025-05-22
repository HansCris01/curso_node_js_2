/*
const {writeFile} = require('fs/promises')

const createBigFile = async () => {
  await writeFile('./data/bigfile.txt', 'hello word'.repeat(100000)) 
}

createBigFile()
*/
//ejecutas el comando: node strams.js
//En la carpeta data se va generar el archivo bigfile.ext

const {createReadStream} = require('fs');

const stream = createReadStream('./data/bigfile.txt', { //si paso un archivo que ne existe me dara el error
    encoding: 'utf-8',
}); //lo va leer por partes

stream.on('data', (chunk) => {
    console.log(chunk)
});

stream.on('end', () => {
    console.log('Ya termine de leer el archivo');
});

stream.on('error', (error) => {
    console.log(error);
});




//ejecutamos el comando: node streams.js
