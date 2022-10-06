// GLOBALS - NO WINDOW !!

// In node there is no "window" object. And that's because
// there's no browser, so there's no window object, so 
// if you try to access window, node will give error 
// and crashes the app

// There are some golbal variables in node.
// Golbal variables are objects or simply variable 
// that we can access anywhere in our application. 

// Some examples of GLOBAL variables are:

// __dirname    -   path to current directory
// __filename   -   file name
// require      -   function to use current module(CommonJS)
// modeile      -   info about the current module(file)
// process      -   info about the env where the program is being executed

console.log(__dirname)
setInterval(()=>{
    console.log('hello world')
}, 1000)