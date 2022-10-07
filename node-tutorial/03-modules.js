// Modules - Encapsulated code (only share minimum)

// CommonJS
// Every file in node is module (by default)

const names = require('./04-names');
const sayHi = require('./05-utils');
// console.log(names);

sayHi('susan')
sayHi(names.anshul)
sayHi(names.sankalp)