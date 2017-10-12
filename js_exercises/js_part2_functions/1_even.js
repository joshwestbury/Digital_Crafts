// Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.
//
var a = [2, -3, 4, -3, 8]

function even(n) {
  return n % 2 == 0;
}
console.log(a.filter(even));
