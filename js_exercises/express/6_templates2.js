var express = require('express');
var app = express();

app.set('view engine', 'hbs');

app.get('/', function(request, response) {
    response.send('Hello World!');
});

app.get('/fav_animals', function(request, response) {
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
    };
    response.render('animals.hbs', context)
});

app.listen(8080, function(){
    console.log('Listening on port 8080');
});
