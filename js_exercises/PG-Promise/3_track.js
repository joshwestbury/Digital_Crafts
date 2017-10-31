// Write a script to create a track.
//
// $ node create_track.js
// Track name? I like crunchy soft
// Album ID? 2
// Track Duration? 5:33
// Create track with ID 13.

var prompt = require('prompt-promise')
var pgp = require('pg-promise') ({
});

var track = {track_name: '', track_id: '', track_duration: ''};
var db = pgp({database: 'myalbums'})
var q = "INSERT INTO albums (track_name, track_id, track_duration) \
    VALUES (${track_name}, ${track_id}, ${track_duration})";

    prompt('Track Name? : ')
    .then(function handle_track_name(track_name) {
        track.track_name = track_name
        return prompt("Track ID? ");
    })
    .then(function handle_track_id(track_id) {
        track.track_id = track_id
        return prompt("Track Duration? ");
    })
    .then(function handle_track_duration(track_duration){
        track.track_duration = track_duration
        return db.result(q, track)
    })
    .then(function handle_database_query(q, track){
        pgp.end()
        prompt.finish();
    })
    .catch(function rejected(err) {
      console.log('error:', err.stack);
      pgp.end()
      prompt.finish();
    });
