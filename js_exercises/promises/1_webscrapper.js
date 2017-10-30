// Given an array of urls:
//
// var urls = [
//   'https://en.wikipedia.org/wiki/Futures_and_promises',
//   'https://en.wikipedia.org/wiki/Continuation-passing_style',
//   'https://en.wikipedia.org/wiki/JavaScript',
//   'https://en.wikipedia.org/wiki/Node.js',
//
// ];
// Use Promise.all and request-promise to retrieve the HTML files for all the web pages.
// https://www.npmjs.com/package/request-promise
//


var rp = require("request-promise");
var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
];
var requests = []
var responses = []

urls.forEach(function (url) {
    requests.push(rp(url));
});


Promise.all(requests)
    .then(function (response) {
        console.log(response)
        //responses.forEach(function(response, index) {
            //var html = fs.writeFile()
    });

//});
