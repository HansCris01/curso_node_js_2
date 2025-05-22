//const {readFile} = require('fs');

/*
const getText = (pathFile) => {
  return new Promise(function (resolve, reject){

   readFile(pathFile, 'utf-8', (err, data) => {
        if (err) {
            reject(err);
        }
        resolve(data);
    })
  }) 
}
  */
/*
getText('./data/archivo1.txt')
.then((result) => console.log(result))
.then(()=> getText('./data/archivo2.txt'))
.then(result => console.log(result))
.catch(error => console.log(error));
*/

// ------   async/await
/*
async function read() {
  try{
  //throw new Error('Error generado a proposito')  
  const result = await getText('./data/archivo1.txt');
  const result2 = await getText('./data/archivo2.txt');
  console.log(result);
  console.log(result2);
  } catch (error){
    console.log(error);
  }
}

read();
*/
// ----- promisify
/*

const {promise, promisify} = require('util');

const readFilePromise = promisify(readFile)

async function read() {
  try{
  //throw new Error('Error generado a proposito')  
  const result = await readFilePromise('./data/archivo1.txt', 'utf-8');
  const result2 = await readFilePromise('./data/archivo2.txt', 'utf-8');
  console.log(result);
  console.log(result2);
  } catch (error){
    console.log(error);
  }
}

read();
*/

//----- f promises
const {readFile} = require('fs/promises');

async function read() {
  try{
  //throw new Error('Error generado a proposito')  
  const result = await readFile('./data/archivo1.txt', 'utf-8');
  const result2 = await readFile('./data/archivo2.txt', 'utf-8');
  console.log(result);
  console.log(result2);
  } catch (error){
    console.log(error);
  }
}

read();

