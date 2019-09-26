require("dotenv").config();

var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});

// get user command
var command = process.argv[2]
var userSearch = process.argv.slice(3).join(' ');
console.log("userSearch: ", userSearch)
// get user query from user
// if command is look-up song
if (command === "spotify-this-song") {
  searchSpotify(userSearch)
} else if (command === "lookup-movie") {
  searchOmdb(userSearch)
}

function searchSpotify(spotifyQuery) {
  spotify
    .search({ type: 'track', query: spotifyQuery })
    .then(function (response) {
      if (response.tracks.items.length === 0) {
        console.log("\nNo matching results. \n")
      }
      for (var i = 0; i < 5 && i < response.tracks.items.length; i++) {
        printTrack(response.tracks.items[i])
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function printTrack(track) {
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

function searchOmdb(search) {
  axios.get("http://www.omdbapi.com/?t=" + userSearch + "&y=&plot=short&apikey=trilogy").then(
    function(response) {
      console.log("The movie's rating is: " + response.data.imdbRating);
    })
    .catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}


