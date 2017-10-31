// Write a script to create an artist.
//
// $ node create_artist.js
// Artist name? Fruit Evanglists
// Created artist with ID 5

var prompt = require('prompt-promise')
var pgp = require('pg-promise') ({
});

var artist = {artist_name: '', id: ''};
var db = pgp({database: 'myalbums'})
var q = "INSERT INTO albums (artist_name, artist_id) \
    VALUES (${artist_name}, ${id})";

prompt('Artist?: ')
.then(function handle_artist_name(artist_name) {
    artist.artist_name = artist_name
    return prompt("Artist ID? ");
})
.then(function handle_artist_id(id){
    artist.id = id
    return db.result(q, artist)
})
.then(function handle_database_query(q, artist_name){
    pgp.end()
    prompt.finish();
})
.catch(function rejected(err) {
  console.log('error:', err.stack);
  pgp.end()
  prompt.finish();
});
