// Allow the counter to either increment 1 or decrement by 1 by calling the increment and decrement methods, respectively. Note: now the counter needs to return an object rather than a function.
//
// > var count = counter(4);
// > count.increment()
// 5
// > count.increment()
// 6
// > count.decrement()
// 5
// > count.decrement()
// 4

function counter () {
    var count1= 0
    var increment = function () {
        count1++;
        return count1;
    }
    var count2 = 0
    var decrement = function() {
        count2--;
        return count2
    }
    return {increment: increment, decrement: decrement};
}

a = counter()
console.log(a.increment())
