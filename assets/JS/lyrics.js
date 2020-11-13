function findLyrics() {

    $.get("https://api.lyrics.ovh/v1/" + document.getElementById("artist").value + "/" + document.getElementById("title").value,
      function (data) {

        document.getElementById("result").innerHTML = data.lyrics.replace(new RegExp("\n", "g"), "<br>")
      })
  }
 

    // var queryURL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=&key=" + APIKey + "AIzaSyARmz0JqhDmVgCCye_QcvXE8D7yzm4cKvk"

    // $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function (response) {

    //         console.log(queryURL);

    //         var videoId = response.items[0].id.videoId
    //         console.log(videoId)

    //         var youTubeVideoURL = `https://www.youtube.com/watch?v=${videoId}`

    //         console.log(youTubeVideoURL)
    //     })
    // })