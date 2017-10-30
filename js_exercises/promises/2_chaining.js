// Using request-promise and fs-promise modules build a function called saveWebPage which takes two parameters, url and filename. The function should chain the two promises together to download the URL and then save the file.
//

var rp = require("request-promise");
var fs = require("fs-extra-promise");

function saveWebPage (url, filename ) {
    rp(url)
      .then(function (response) {
          fs.writeFileAsync(filename, response)
          .then(function(response){
              console.log('Operation complete.')
          })
          .catch(function (err) {
              console.log("Inside Error", err);
          });
      })
      .catch(function (err) {
          console.log("Outside Error", err);
      });
}

saveWebPage('http://www.google.com', 'output.html')
