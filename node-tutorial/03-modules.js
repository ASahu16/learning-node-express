// Modules - Encapsulated code (only share minimum)

// CommonJS
// Every file in node is module (by default)

const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');
// console.log(names);
console.log(data);
sayHi('susan')
sayHi(names.anshul)
sayHi(names.sankalp)