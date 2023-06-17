const converter = require('./converter.js') ;
let temp = process.argv[2]
let escala = process.argv[3]



console.log(converter.converter(temp,escala))
