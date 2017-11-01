var express = require('express');
var app = express();

app.set('view engine', 'hbs');


app.get('/', function(request, response) {
    response.send('Hello World!');
});

app.get('/age', function(request, response) {
    var age = [38];
    var context = {titie: 'Age', age: age}
    response.render('age.hbs', context);
});

//the url will look like this: /greet?age=38


app.listen(8080, function(){
    console.log('Listening on port 8080');
});
