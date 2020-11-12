//variables

// 1. search artist by name

$("#searchBtn").on("click", function(event) {
    event.preventDefault();

    var artistName = $("#searchArtistName").val().trim();

    //searchArtist(artistName);

    var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + artistName + "&api_key=65ef463da86ddbf2f244742a378779b4&format=json";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(showResults)


})

// 2. function showReuslts to list out the suggested results for the name the user input

function showResults (results) {

    var searchedArtist = results.results.artistmatches.artist;

    console.log(searchedArtist);

    for ( i = 0; i < searchedArtist.length; i++) {

        var listArtists = searchedArtist[i].name;

        $(listArtists).append(".artist-list");

        
    }

}



// function showEvents(artistName) {
//     var queryURL = "https://rest.bandsintown.com/v4/artists/" + artistName + "/?app_id=f7b296adcd087f892a1993c5ddba60ef";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(data) {
//         console.log(data);
//     })

// };

 

// 3. retrieve search results of artists

// 4. add event listener to choose the artist

// 5. display events information

