var express = require('express');
var app = express();

app.set('view engine', 'hbs');

app.get('/', function(request, response) {
    response.send('Hello World!');
});

app.get('/hello', function(request, response) {
    var name = request.query.name || 'Name ???';
    var age = request.query.age || 'Age???'
    var birthyear = 2017 - age
    var context = {title: 'Hello', name: name, age: age, birthyear:birthyear}
    response.render('hello.hbs', context);
});

app.listen(8080, function(){
    console.log('Listening on port 8080');
});
