// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.
//
// > positiveNumbers([1, -3, 5, -3, 0])
// [1, 5, 0]
// > positiveNumbers([1, 2, 3])
// [1, 2, 3]
// > positiveNumbers([-1, -2, -3])
// []


function positiveNumbers(num) {
  var newNum = []
  for (var i = 0; i < num.length; i++) {
    if (num[i] >= 0) {
      newNum.push(num[i])
    } else {
      newNum.push()
    }
  }
  console.log(newNum)
}

positiveNumbers([1, -3, 5, -3, 0])
