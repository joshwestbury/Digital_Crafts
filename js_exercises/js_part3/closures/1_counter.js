// # Counter
// #
// # Make a counter function that returns a function that returns a successive number each time it is called.
// #
// # > var count1 = counter()
// # > var count2 = counter()
// # > count1()
// # 1
// # > count1()
// # 2
// # > count2()
// # 1
// # > count2()
// # 2
// # > count1()
// # 3

function counter () {
    var count = 0
    var actuallyCount = function () {
        count++;
        return count;
    }
    return actuallyCount;
}

count = counter()
console.log(count())
console.log(count())
console.log(count())
