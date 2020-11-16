//variables

//search artist by name
$("#searchBtn").on("click", function (event) {

    $("#goBackBtn").show();

    event.preventDefault();

    var artistName = $("#searchArtistName").val().trim();

    //lastfm
    var queryURL = "https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + artistName + "&api_key=65ef463da86ddbf2f244742a378779b4&format=json";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(showResults)

    $("#nameList").empty();

});

//function showReuslts to list out the suggested results for the name the user input
function showResults(results) {

    var searchedArtists = results.results.artistmatches.artist;

    console.log(searchedArtists);

    for (i = 0; i < 10; i++) {

        var listArtists = $('<li class="artist-list list-group-item">');

        listArtists.text(searchedArtists[i].name);


        $("#nameList").append(listArtists);


    };

    //for the artist that was clicked on, run showEvents function for the name that was clicked on
    $(".artist-list").on('click', function (e) {

        event.preventDefault();

        showEvents($(this).text());

    });

};

//this function queries bandsintown api to retrieve more information about the artist
function showEvents(artistName) {

    var queryURL2 = "https://rest.bandsintown.com/v4/artists/" + artistName + "/?app_id=f7b296adcd087f892a1993c5ddba60ef";

    console.log(queryURL2);

    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (data) {
        console.log(data);
        $(".list-group").empty();
        displayInfo(data);
    });
};

//passed the data through this function to retrieve artist name and image
function displayInfo(artistInfo) {

    $(".container").slideUp();

    //add artist name
    var artistHeading = artistInfo.name;

    var name = $('<h1>');

    name.text(artistHeading);

    $("#name").append(name);

    //adding image to page

    var artistImgURL = artistInfo.image_url;

    var image = $('<img src="" class="img-fluid" alt="Responsive image">')

    image.attr("src", artistImgURL);

    $("#picture").append(image);

    //if else statement to see whether there are any upcoming events for the artist

    var eventCount = artistInfo.upcoming_event_count;

    if (eventCount === 0) {
        var h3El = $('<h3>');

        h3El.text("No Upcoming Events!");

        $("#info").append(h3El);

    } else { //if not, then run listEvents function with the artist's name retrieved from the last ajax call

        var h3El = $('<h3>');

        h3El.text("Upcoming Events: ");

        $("#info").append(h3El);

        listEvents(artistHeading);

    };

    //this function queries the bandsintown api for events
    function listEvents() {

        var queryURL3 = "https://rest.bandsintown.com/v4/artists/" + artistHeading + "/events/?app_id=f7b296adcd087f892a1993c5ddba60ef";

        $.ajax({
            url: queryURL3,
            method: "GET"
        }).then(function (events) {

            //this for loop prints out the event location and date with a link to purchase the tickets from bandsintown.com
            for (i = 0; i < events.length; i++) {

                var listVenues = $('<a target= "_blank" href="'+events[i].url+'" class="list-group-item list-group-item-action" id="links' + i + '">');

                listVenues.text(events[i].venue.location + ":    " + events[i].datetime.substring(0, 10));

                $("#locationList").append(listVenues);

            }
        });
    };
};