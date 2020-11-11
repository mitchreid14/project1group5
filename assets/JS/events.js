//variables

// 1. create query to search 

function searchArtist() {
    var queryURL = "https://rest.bandsintown.com/v4/artists/" + artistName + "/?app_id=f7b296adcd087f892a1993c5ddba60ef";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(artistData) {
        console.log(artistData);
    })

};

// 2. search artist by name



// 3. retrieve search results of artists

// 4. add event listener to choose the artist

// 5. display events information