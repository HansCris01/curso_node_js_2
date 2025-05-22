const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (data, secondData) => {
    console.log('recibido');
    console.log(data);
     console.log(secondData);
});

customEmitter.emit('response', 'Hola mundo', [12,34,55,4544,22]);
//ejecutamos con el comando: node events.js