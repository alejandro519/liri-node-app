require("dotenv").config();

var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});
var command = process.argv[2]
var userSearch = process.argv.slice(3).join(' ');
console.log("userSearch: ", userSearch)

if (command === "spotify-this-song") {
  searchSpotify(userSearch)
} else if (command === "movie-this") {
  searchOmdb(userSearch)
} else if (command === "concert-this") {
  searchBands(userSearch)
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
  console.log("Artist: " + artist)
  console.log("Song: " + song)
  console.log("URL: " + spotifyURL)
  console.log("Album: " + albumName)
  console.log('\n--------------------------\n')
}

function searchOmdb(search) {
  axios.get("http://www.omdbapi.com/?t=" + userSearch + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
      console.log("\n-----------------------------\n")
      console.log("The movie's title is: " + response.data.Title);
      console.log("The movie was released in: " + response.data.Year);
      console.log("The IMDB rating is: " + response.data.imdbRating);
      console.log("The Rotten Tomatoes Rating is: " + response.data.Ratings[1].Value);
      console.log("The movie was produced in: " + response.data.Country);
      console.log("The language of the movie is: " + response.data.Language);
      console.log("The plot of the movie is: " + response.data.Plot);
      console.log("The actors in the movie are: " + response.data.Actors);
      console.log("\n-----------------------------\n")

    })
    .catch(function (error) {
      if (error.response) {
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

function searchBands(search) {
  axios.get("https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp").then(
    function (response) {
      console.log("\n-----------------------------\n")
      console.log("Name of the venue: " + response.data[1].venue.name);
      console.log("Venue location: " + response.data[1].venue.city + ", " + response.data[1].venue.country);
      console.log("Date of the event: " + response.data[1].datetime);
      console.log("\n-----------------------------\n")
    }
  )
  .catch(function (error) {
    if (error.response) {
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
}


