function findLyrics() {

    $.get("https://api.lyrics.ovh/v1/" + document.getElementById("artist").value + "/" + document.getElementById("title").value,
      function (data) {

        document.getElementById("result").innerHTML = data.lyrics.replace(new RegExp("\n", "g"), "<br>")
      })
  }