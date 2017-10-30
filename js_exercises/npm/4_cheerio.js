// Request and Cheerio are two useful modules and they can be combined to do some really cool stuff.
//
// Figure out how to use both of these modules individually.
// Use the modules together to grab the list of "packages people 'npm install' a lot" on the npmjs.org front page, store the results in an array, and print it out to the terminal.

var request = require("request");
      cheerio = require("cheerio");
var target = "https://www.npmjs.com/"
const pack = [];


request(target, function(err, resp, body) {
    if (!err && resp.statusCode == 200) {
        var $ = cheerio.load(body);
        $('h3 a.type-neutral-1').each(function(i, elem) {
            pack[i] = $(this).text();
        });
        console.log(pack)
    }
});



//
