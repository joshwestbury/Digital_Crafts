// Function Rewrites
//
// Rewrite the following normal functions into callback functions.
//
// function add(x, y) {
//   var result = x + y;
//   return result;
// }
//
// function subtract(x, y) {
//   return x - y;
// }
//
// function greeting(person) {
//   return 'Hola, ' + person + '!';
// }
//
// function product(numbers) {
//   return numbers.reduce(function(a, b) {
//     return a * b;
//   }, 1);
// }

function add(x, y, callback) {
    var result = x + y;
    callback(result);
}

function subtract(x, y, callback) {
    var result = x - y;
    callback(result);
}

function greeting(person, callback) {
    var result = 'Hola, ' + person + '!';
    callback(result);
}

var numbers = [1, 2, 5];
function product2(numbers, callback) {
    setTimeout(function() {
        var result =  numbers.reduce(function(a, b) {
            return a * b;
        }, 1);
        callback(result)
    }, 10000);
}

var numbers = [1, 2, 5];
function product(numbers, callback) {
    var result =  numbers.reduce(function(a, b) {
        return a * b;
    }, 1);
    callback(result)
}

add(5, 9, function(result) {console.log(result); });
subtract(10, 5, function(result) {console.log(result); })
greeting('Dan', function(result) {console.log(result);})
product(numbers, function(result) {console.log(result); });
product2(numbers, function(result) {console.log(result); });
