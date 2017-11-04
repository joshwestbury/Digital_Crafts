const express = require('express');
const Promise = require('bluebird');
const pgp = require('pg-promise')({
  promiseLib: Promise
});
const bodyParser = require('body-parser');

const dbConfig = require('./db-config');
const db = pgp(dbConfig);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'hbs');

app.get('/', function(request, response) {
  response.redirect('/todos');
});

app.get('/todos', function(request, response) {
    db.any('SELECT * FROM task WHERE done=FALSE')
      .then(function(todos) {
        response.render('todos.hbs', {
          todos: todos
        });
      })
});

app.get('/todos/add', function(request, response){
    context = {title: 'Add'}
    response.render('add.hbs', context)
})

app.post('/todos/add', function(request, response, next) {
    var desc = request.body.description;

    db.none(`INSERT INTO task VALUES (default, $1, FALSE)`, desc)
      .then(function() {
        response.redirect('/todos');
      })
      .catch(next);
});

app.get('/todos/done/:id', function(request, response) {
    var id = request.params.id;
    context = {title: 'Done'}

    db.none(`UPDATE task SET done = TRUE WHERE task.id = $1`, id)
      .then(function() {
        response.redirect('/todos');
      })
})

// app.post('/todos/done/:id', function(request, response, next) {
//     var id = request.params.id;
//
//     db.none(`UPDATE task SET done = TRUE WHERE task.id = $1`, id)
//       .then(function() {
//         response.redirect('/todos');
//       })
//       .catch(next);
// });




app.listen(8080, function(){
    console.log('Listening on port 8080');
});
