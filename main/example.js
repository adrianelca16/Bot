const prueba = require('./app').myHandler

console.log(prueba(1+2, 3, ()=>{ 3 + 3 }));