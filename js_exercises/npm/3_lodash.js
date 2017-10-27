// Lodash is a swiss army knife toolbelt of a module. For example, there's a shuffle built in, and if you had known that, you could have used it for black jack and memory game.
//
// Write a simple program that makes use of lodash's shuffle function.

var lodash = require('lodash')

var x = [1, 2, 4, 5, 6, 7, 8, 40, 8]
console.log(lodash.shuffle(x))
