// var searchBtn = document.getElementById("button");
//     console.log(searchBtn);
function searchSong() {
    // var song = $("#song").val();
    // console.log(song);
    var searchSong = $("#searchSong").val();
    console.log(searchSong);

}
// searchBtn.addEventListener("click", searchSong)

$("#button").on("click", searchSong);

