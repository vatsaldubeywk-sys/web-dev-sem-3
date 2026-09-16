const EventEmitter = require('events');
let name="vatsal";
class Button extends EventEmitter {}
const button = new Button();

button.on('click', (name) => {
    console.log(`${name} clicked`);
});
button.on('mouseover', (name) => {
    console.log(`${name} hovered`);
});

button.emit('click',name);
button.emit('mouseover',name);