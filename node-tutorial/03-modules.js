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

// Miscellaneous 
require('./07-mind-grenade');

// when we run this code
// node node-tutorial/app.js
// we will get a console log "the sum is : 15"
// 
// Now this happend is because
// if we have a function inside a module that we invoke,
// that code will run though we didn't assign it to a variable
// or called to that variable, we just simply 
// require() function is the easiest way to include modules that exist in separate files. 
// The basic functionality of require() is that it
//  - reads a JavaScript file, 
//  - executes the file, 
//  - and then proceeds to return the exports object

// This is possible in ES6 modules and vanilla javascript as well.

// Simply it means when we inport a module, we actually invoke it. 

// Why this happens ?
// This happens because the code is not just export it on its own.
// When the node exports this, it actually wraps it in the function.
// So that's why when we use require(), we do invoke the code if we have 
// some kind of function that actually is executed here.
