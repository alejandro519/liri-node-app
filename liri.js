require("dotenv").config();

var axios = require("axios");
var keys = require("./keys.js");

var command = process.argv[2];
var search = process.argv.slice(3).join(' ');

var BANDS = function() {
    var divider = "\n------------------------------------------------------------\n\n";
  
    // findShow takes in the name of a tv show and searches the tvmaze API
    this.findBand = function(band) {
      var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  
      axios.get(URL).then(function(response) {
        var jsonData = response.data;
        var bandData = [
          "Artist: " + jsonData.offers,
          "Genre(s): " + jsonData.genres.join(", "),
          "Rating: " + jsonData.rating.average,
          "Network: " + jsonData.network.name,
          "Summary: " + jsonData.summary
        ].join("\n\n");
  
        // Append showData and the divider to log.txt, print showData to the console
        fs.appendFile("log.txt", bandData + divider, function(err) {
          if (err) throw err;
          console.log(bandData);
        });
      });
    };