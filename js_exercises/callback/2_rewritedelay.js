//Add a 1000 millisecond delay to the callback versions of the exercise above.

var numbers = [1, 2, 5];
function product2(numbers, callback) {
    setTimeout(function() {
        var result =  numbers.reduce(function(a, b) {
            return a * b;
        }, 1);
        callback(result)
    }, 10000);
}
