var express = require('express');
var app = express();

app.set('view engine', 'hbs');

app.get('/', function(request, response) {
    response.render('home.hbs');
});

app.get('/age', function(request, response) {
    var age = [38];
    var context = {title: 'age', age: age}
    response.render('age.hbs', context);
});

app.get('/fav_animals', function(request, response) {
    var name = request.query.name || 'Name ???';
    var animals = [
        { name: 'cats', favorite: true },
        { name: 'dogs', favorite: true },
        { name: 'tree frogs', favorite: true },
        { name: 'earth worms', favorite: false },
        { name: 'guinea pigs', favorite: true },
    ];
    var context = {
        title: 'Animals',
        animals: animals,
        name: name,
    };
    response.render('animals.hbs', context)
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
