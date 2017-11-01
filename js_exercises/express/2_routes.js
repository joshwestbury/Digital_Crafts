var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('Hello World!');
});

app.get('/cats', function(request, response) {
    response.send('Meow');
});

app.get('/dogs', function(request, response) {
    response.send('Woof');
});

app.get('/cats_and_dogs', function(request, response) {
    response.send('Living together');
});


app.listen(8080, function(){
    console.log('Listening on port 8080');
});
