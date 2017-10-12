// Write a function wordHistogram which takes a string as argument and tallies the number of times each word appears in the string, and returns the tally as an object. Example:
//
// > wordHistogram('to be or not to be')
// { to: 2, be: 2, or: 1, not: 1 }

function letterHist(sent) {
  var hist = {}
  sent = sent.split(" ")
  sent.forEach(function(char) {
    hist[char] = hist[char] + 1 || 1
  })
  console.log(hist);
  };
letterHist('to be or not to be')
