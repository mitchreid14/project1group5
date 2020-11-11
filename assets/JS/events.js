//variables

//array for suggesting search terms
var artistNameSuggestion = [];

// 1. create query to add to array artistNameSuggestions 

function searchArtist(artistName) {

    var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + artistName + "&api_key=65ef463da86ddbf2f244742a378779b4&format=json";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(data) {
        console.log(data.results.artistmatches);
    })
};









// 2. create query to search artists by name








// function searchArtist(artistName) {
//     var queryURL = "https://rest.bandsintown.com/v4/artists/" + artistName + "/?app_id=f7b296adcd087f892a1993c5ddba60ef";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(data) {
//         console.log(data);
//     })

// };

// 2. search artist by name

$("#searchBtn").on("click", function(event) {
    event.preventDefault();

    var inputArtist = $("#searchArtistName").val().trim();

    searchArtist(inputArtist);

}) 

// 3. retrieve search results of artists

// 4. add event listener to choose the artist

// 5. display events information

