// Write a function letterHistogram which takes a string as argument. It will tally(histogram) the number of times each character appears in the string, and return the tally as an object. Example:
//
// > letterHistogram('bananas')
// { b: 1, a: 3, n: 2, s: 1 }
// Note: the order of the keys doesn't matter.

function letterHist(word) {
  var hist = {}
  word = word.split("")
  word.forEach(function(char) {
    hist[char] = hist[char] + 1 || 1
  })
  console.log(hist);
  };
letterHist('bananna')
