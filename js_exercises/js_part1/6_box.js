// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.
//
// > printBox(6, 4)
// ******
// *    *
// *    *
// ******

y = []
x = []
function printBox (w, h) {
    for (var i=0; i < w; i++) {
        y.push("*")
    } console.log(y.join(""));
    x.push('*')
    var z = ' '.repeat(w - 2);
    x.push(z);
    x.push('*')
    //var z = "*" + " ".repeat(8) + "*";
    for (var i=0; i < h -2; i++) {
        console.log(x.join(""));
    } console.log(y.join(""));
}

printBox (10, 4)
