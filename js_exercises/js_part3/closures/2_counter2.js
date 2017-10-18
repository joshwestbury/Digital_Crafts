// Allow the caller of counter to initialize the count to the first argument that's passed in.
//
// > var count1 = counter(4)
// > count1()
// 5
// > count1()
// 6

function counter (x) {
    var count = x
    var actuallyCount = function () {
        count++;
        return count;
    }
    return actuallyCount;
}

count = counter(5)
console.log(count())
