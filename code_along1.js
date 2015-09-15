$.ajax({
  url:"http://charts.spotify.com/api/tracks/most_streamed/us/daily/latest",
  method: "GET",
  dataType: "JSONP"
}).success(function(spotifyData){
  var songTitle=spotifyData.tracks[0].track_name;
  console.log(songTitle);
});
