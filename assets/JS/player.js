// $(document).ready(function () {
//             console.log('ready!')
//             var APIKey = config.GoogleAPIKey


//             var queryURL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=&key=" + APIKey + "AIzaSyARmz0JqhDmVgCCye_QcvXE8D7yzm4cKvk"


//             $.ajax({
//                     url: queryURL,
//                     method: "GET"
//                 }).then(function (response) {

//                     console.log(queryURL);

//                     var videoId = response.items[0].id.videoId
//                     console.log(videoId)

//                     var youTubeVideoURL = `https://www.youtube.com/watch?v=${videoId}`

//                     console.log(youTubeVideoURL)

//                     $("#display-div").html(`<a href=${youTubeVideoURL}> Youtube Link Generated form API</a>`);
//                 })
//             })