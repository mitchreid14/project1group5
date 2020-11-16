$(document).ready(function(){

    var APIKey = "AIzaSyABwqMY0kKtIekrntpiA99fXdYNeF-eTvI"

    $("form").submit(function(event){
        event.preventDefault()

        var search = $("#search").val()


        videoSearch(APIKey,search, 1)
    })

    function videoSearch(key,search,maxResults){
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q" + search,function(data){
            console.log(data)
        })
    }
})