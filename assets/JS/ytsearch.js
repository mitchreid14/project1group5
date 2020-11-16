
    var APIKey = "AIzaSyD_B9av7xMgs0qwY3n01ShjHSakyTKGs50"

    var video = ""

    $("#search").click(function (event) {
        event.preventDefault()
        

        var search = $("#Search").val()
        console.log(search)

        videoSearch(APIKey, search, 5)
    })

    function videoSearch(key, search, maxResults) {
        $("#video").empty()
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function (data) {
            console.log('Data: ', data)

            data.items.forEach(item => {
                video = `
                
                <iframe width="420" height="315" src= "http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                
                `
                $("#video").append(video)
            });

        });
    }
