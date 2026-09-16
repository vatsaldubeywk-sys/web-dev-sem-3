const fs = require('node:fs');

fs.writeFileSync('exp.txt', 'Hey there I am using Whatsapp','utf8');
// fs.writeFileSync('del.txt', 'Hey there I am using Whatsapp','utf8');
console.log("Created");

const r=fs.readFileSync('exp.txt','utf8');
console.log("Read ",r);

const a=fs.appendFileSync('exp.txt','\nMy name is Anthony Gonsalves');
console.log("Appended");

fs.unlinkSync('del.txt');
console.log("Deleted");

fs.mkdirSync('new');
console.log("Created");

fs.rmdirSync('new');
console.log('Deleted')

if(fs.existsSync('exp.txt')){
    console.log('File exists');
}else{
    console.log('File does not exists');
}