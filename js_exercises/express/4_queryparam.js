var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('Hello World!');
});

app.get('/greet', function(request, response) {
    var age = request.query.age || '???';
    response.send('Your age is: ' + age);
});

//the url will look like this: /greet?age=38


app.listen(8080, function(){
    console.log('Listening on port 8080');
});
