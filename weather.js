if ("geolocation" in navigator) {
  console.log("geolocation is available");
  var output = document.getElementById("out");

  // call geolocation.getCurrentPosition
  navigator.geolocation.getCurrentPosition(success, error);

  output.innerHTML = "<p>Locating…</p>";

  // on geolocation.getCurrentPosition success
  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=10&size=300x300&sensor=false";

    output.appendChild(img);
  }

  // on error
  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

} else {
  console.log("geolocation is NOT available");
  output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
}
