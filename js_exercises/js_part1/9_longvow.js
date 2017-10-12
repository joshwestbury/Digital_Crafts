// Write a function, which is given a string, return the result of extending any long vowels to the length of 5.
//
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'


function long(word) {
  var z = []
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      z.push(word[i].repeat(5))
    } else {
      z.push(word[i])
    }
  }
  console.log(z.join(''))
}
long('choose')
