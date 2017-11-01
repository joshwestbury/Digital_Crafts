var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('Hello World!');
});

app.get('/greet/:username', function(request, response) {
    var username = request.params.username;
    response.send('Hello: ' + username);
});

//url will look like this: /greet/Josh

app.listen(8080, function(){
    console.log('Listening on port 8080');
});
