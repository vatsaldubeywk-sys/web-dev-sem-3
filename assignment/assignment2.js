const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('Login', (name) => {
    console.log(`Hola, ${name}! Student logged in successfully\n`);
});

myEmitter.on('Submit', () => {
    console.log(`Assignment submitted successfully\n`);
});

myEmitter.on('Logout', (name) => {
    console.log(`Adios, ${name}! Student logged out successfully\n`);
});


myEmitter.on('Exit', () => {
    console.log('Exiting Application\n');
});

myEmitter.emit('Login', 'Vatsal');
myEmitter.emit('Submit');
myEmitter.emit('Logout', 'Vatsal');
myEmitter.emit('Exit');