var artist;
var query = "https://genius.p.rapidapi.com/search?q=" + artist;
console.log(query);

function searchArtist() {
    artist = $("#searchArtist").val();
    console.log(artist);
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://genius.p.rapidapi.com/search?q=" + artist,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "5d9a59c115msh16ea22a2f0e36abp1b797ejsnd22573626960",
            "x-rapidapi-host": "genius.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

$("#searchBtn").on("click", searchArtist);


