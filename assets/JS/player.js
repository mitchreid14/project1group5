$(document).ready(function () { // when the html is loaded run the code in document readys function
    console.log('Ready!')
        var APIKey = "AIzaSyAnEMB_xiuY58i6P7sr3zoJygAxoMc5FOg"

    var queryURL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=&key=" + APIKey //im going to use this query url to ask the youtube api for a response

    //here is where i actually use the query url to ask for a response using ajax
    $.ajax({
        url: queryURL, //this is configuring or setting up the ajax call with the query url
        method: "GET" //this is configuring or setting nup the request to the youtube api as a GET request
    }).then(function (response) { //this is where ajax will be recieving  the response from the api a promise
        console.log(queryURL);
        console.log(response)

        var videoId = response.items[0].id.videoId
        console.log(videoId)

        var youTubeVideoURL = `https://www.youtube.com/embed/${videoId}`
        console.log(youTubeVideoURL)

        function videosearch (key, search, maxResults);
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,function(data){
            console.log(data)
        })

        // $("#video").html(`<a href=${youTubeVideoURL}> Youtube Link Generated form API</a>`);
        
        $("#ytframe").attr("src", youTubeVideoURL);

    })


    // var iframe = $("#ytframe")
    

})
// to get iframe back, going to need function before this
// style.disply=block