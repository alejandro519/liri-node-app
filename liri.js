require("dotenv").config();

var axios = require("axios");
var keys = require("./keys.js");
// var command = process.argv[2];
// var search = process.argv.slice(3).join(' ');


var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});

// get user command 
// get user query from user
// if command is look-up song
// then query spotify
// print first 5 results

//TODO: what if there are no results from spotify

var spotifyQuery = "All the Small Things"

spotify
  .search({ type: 'track', query: spotifyQuery })
  .then(function(response) {
    for (var i = 0; i < 5; i++){
    printTrack(response.tracks.items[i])
    }
  })
  .catch(function(err) {
    console.log(err);
  });

  function printTrack(track){
    var albumName = track.album.name
    var song = track.name
    var spotifyURL = track.external_urls.spotify
    var artist = track.artists[0].name
    console.log("Song: " + song)
    console.log("Album: " + albumName)
    console.log("URL: " + spotifyURL)
    console.log("Artist: " + artist)
    console.log('\n--------------------------\n')
  }

  