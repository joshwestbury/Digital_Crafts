/*

WTF?

Running this script file not only doesn't create the promise.html file it is supposed to, but it prints out this giant blob of HTML.

*/

var rp = require("request-promise");
var fs = require("fs-promise");

var url = 'https://en.wikipedia.org/wiki/Futures_and_promises'
rp.get(url)
    .then(function(response) {
        fs.writeFile('promise.html', response)
        .then(function(response) {
             console.log('Wrote file promise.html');
        })
        .catch(function (err) {
            console.log("Inside Error", err);
        })
    .catch(function(err) {
        console.log('Something went wrong');
        console.log(err.message);
    });
})
