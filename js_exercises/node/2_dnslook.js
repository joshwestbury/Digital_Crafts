// DNS lookup
//
// Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out. Example:
//
// $ node dns_lookup.
// Domain name: yahoo.com
// IP Address: 98.139.183.24
// Trigger an error condition by providing an invalid domain. See that the error gets displayed.
//
// Hint: Use require('dns') and dns.lookup.

var dns = require('dns');
var request = require('request');
var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Please enter a domain name: ", function(answer) {
    var url = answer;
    var x = dns.lookup(url, function (err, addresses, family) {console.log(addresses);
    request.get(x, function (error, response, html) {
        if (error) {
            console.error(error.message);
            return;
        }
      console.log(html);
      });
    });
    rl.close();
});
