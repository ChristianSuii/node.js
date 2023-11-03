// Node runs on server not on the browser
// The console is the terminal
// Ctrl + C is used to exit.
// Node server to access the code on console
// Global object instead of window object
// Has common core modules that we will explore
// CommonJS modules instead of ES6 modules

const os = require('os');

console.log(os.type())
console.log(os.version())
console.log(os.homedir())


console.log(__dirname)
console.log(__filename)