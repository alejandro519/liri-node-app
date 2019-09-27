# liri-node-app
Overview

The liri app or, language interpretation and recognition interface app, is a command line node app that allows a user to input parameters and will return data. 

In its current state, the liri app will allow you to lookup:
-your favorite band's upcoming event information by utilizing the Bands in Town Artist Events API and the axios package (a promise based HTTP client)
-search Spotify to get details on your favorite song by utilizing the node-spotify-api package available on npmjs.com
-search OMDB for detials on your favorite movie by utilizing the axios package to retrieve data from teh OMDB API

Running the App

***Before using the app, the user needs to provide their own .env file with a set of unique keys in order to employ the Spotify API***

For more information on .env visit: https://www.npmjs.com/package/dotenv

There are three commands currently built into the app:

1. concert-this
2. spotify-this-song
3. movie-this

Use "concert-this" to search the name of a band and the results will return an upcoming concert including date an venue.

Use "spotify-this-song" to search the name of a song and the results will return the name of the artist along with the album name and band URL. Because song names are used more than once, the results will yeild five distinct responses.

Use "movie-this" to search the name of a movie. The results will show a detailed list of items including ratings information,language, country, and actors.

In order to run the app, navigate to liri.js from your terminal.
Once in the terminal type in the following command: node + liri.js + the command you wish you use + the name of the band/song/movie.
The name of the band/song/movie does not need to be in parentheses.

To view a deployed version of the app, visit: https://alejandro519.github.io/liri-node-app/
To view a video of the working app, visit: https://drive.google.com/open?id=1rUfAjVtYvdXTI19G72bUzhD2aL-Q3Sfa

The technologies used in this app include:

-JavaScript
-Node.js
-NPM
-axios
-node-spotify-api package
-OMDB api
-Bands In Town Artist Events API

Future improvements will be made and additional functionalities will be added to the app including:

-default response to spotify-this-song if no search parameter is entered
-a "do-what-it-says" command that will text from inside of random.txt file and call one of liri's commands
-output the data being logged in Terminal to a log.txt file for future review
-using moment.js to format the date/time shown in the Bands in Town api

Lead developer: Alejandro Pulgarin 
email: alejandro519@gmail.com
