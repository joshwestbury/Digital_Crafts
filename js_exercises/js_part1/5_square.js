// Write a function printSquare which is given a size and prints a square of that size using asterisks.
//
// > printSquare(5)
// *****
// *****
// *****
// *****
// *****

function printSquare (x) {
    y = []
    for (var i=0; i < x; i++) {
        y.push("*");
        console.log(y);
    } for (var i=0; i < x; i++) {
        console.log(y.join(""));
        }
}

printSquare(5)
