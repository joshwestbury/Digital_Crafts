// Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.
//
// > sum([1, 2, 3])
// 6

function sum (arr) {
  var result = arr.reduce(function (x, y) {
    return x + y;
  });
  console.log(result)

}

sum ([1, 2, 3])
