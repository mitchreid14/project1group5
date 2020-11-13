//variables

//search artist by name

$("#searchBtn").on("click", function(event) {
    event.preventDefault();

    var artistName = $("#searchArtistName").val().trim();

    var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + artistName + "&api_key=65ef463da86ddbf2f244742a378779b4&format=json";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(showResults)


})

//function showReuslts to list out the suggested results for the name the user input

function showResults (results) {

    var searchedArtists = results.results.artistmatches.artist;

    console.log(searchedArtists);

    for ( i = 0; i < 10; i++) {

        var listArtists = $('<li class="artist-list list-group-item">');
        
        listArtists.text(searchedArtists[i].name);
        
        
        $(".list-group").append(listArtists);

        
    }

    $(".artist-list").on('click', function(e) {

        event.preventDefault();

        showEvents($(this).text());

    }) 

}

function showEvents(artistName) {
    var queryURL2 = "https://rest.bandsintown.com/v4/artists/" + artistName + "/?app_id=f7b296adcd087f892a1993c5ddba60ef";

    console.log(queryURL2);

    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(data) {
        console.log(data);
        $(".list-group").empty();
        displayEvents(data);
    })
};

function displayEvents(artistInfo){

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

    //upcoming events

    var eventCount = artistInfo.upcoming_event_count;

    if (eventCount === 0) {
        var h3El = $('<h3>');

        h3El.text("Upcoming Events: ");

        $("#info").append(h3El);

        var h5El = $('<h5>');

        h5El.text("Sorry! No upcoming events!");

        $("#info").append(h5El);

    } else {

        var concerts = $('<h3>');

        concerts.text("Upcoming Events: " + eventCount);

        $("#info").append(concerts);
        
        var listEvents = function(e) {
        
        var queryURL3 = "https://rest.bandsintown.com/v4/artists/" + artistHeading + "/events/?app_id=f7b296adcd087f892a1993c5ddba60ef";
        
        $.ajax({
            url: queryURL3,
            method: "GET"
        }).then(function(events) {
        console.log(events);
        displayEvents(events);

        var listVenues = $('<li class="venue-list list-group-item">');

        for ( i = 0; i < listVenues.length; i++) {
            
            listVenues.text(artistInfo[i]);
            
            $(".list-group").append(listVenues);
        }
        });
    };

};
};


    

    


