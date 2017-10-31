// Write a script to create a new album in the database. You may either connect to your local database or your remote database. The script will prompt the user for an album name, a year, and an artist ID. You may use the prompt-promise module to get user prompts in the promise style - with this everything can be written in one straight chain. Be sure to sanitize your inputs!
//
// Example session:
//
// $ node create_album.js
// Album name? The Squeezed Apple
// Album year? 1998
// Artist ID? 4
// Created album with ID 2.
var prompt = require('prompt-promise')
var pgp = require('pg-promise') ({
});

var album = {name: '', year: '', id: ''};
var db = pgp({database: 'myalbums'})
var q = "INSERT INTO albums \
    VALUES (default, ${name}, ${year}, ${id})";

prompt('Album name?: ')
.then(function handle_album_name(name) {
    album.name = name
    return prompt("Album year? ");
})
.then(function handle_album_year(year){
    album.year = year
    return prompt("Artist ID? ");
})
.then(function handle_artist_id(id){
    album.id = id
    return db.result(q, album) // returns promise that calls database
})
.then(function handle_database_call(result) {
    pgp.end()
    prompt.finish();
})
.catch(function rejected(err) {
  console.log('error:', err.stack);
  pgp.end()
  prompt.finish();
});
