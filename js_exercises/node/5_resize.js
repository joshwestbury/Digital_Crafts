// Bonus Challenge: Resize an image
//
// Write a program to download the JavaScript logo from https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png, and resize it to the size 240x240. You might use the request module to download the file. Hint: You will set the encoding option to null for request. Example:
//
// var options = {
//   url: 'http://example.com/example.png',
//   encoding: null
// };
// request(options, function(err, response, imageData) {
//   // save image data and resize
// });
// Hint 2: Use a module like sharp to resize the image.


// var request = require("request")
// var options = {
//   url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
//   encoding: null
// };

// request(options, function(err, response, imageData) {
//     console.log('error:', err);
//
// });


var Jimp = require("jimp");
var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

download('https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png', 'js.png', function(){
  console.log('done');
});

Jimp.read("js.png", function (err, lenna) {
    if (err) throw err;
    lenna.resize(240, 240)            // resize
         .quality(60)                 // set JPEG quality
         //.greyscale()                 // set greyscale
         .write("js_new.png"); // save
});
