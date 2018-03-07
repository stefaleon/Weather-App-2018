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

    // proceed with fetching the weather data from the openweathermap API
    var url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b937724d4d3febfcc804ce1e1965fc68`;

    console.log(url);

    var weatherDiv = document.querySelector("#weather");

    fetch(url).then(function(res){
      console.log("res is:", res);
      return res.json();
    }).then(function(data){
      console.log("Parsed data is an object:", data);
      weatherDiv.innerHTML = `<p>Temperature: ${data.main.temp}</p>
                              <p>Weather: ${data.weather[0].main}</p>
                              <p>Description: ${data.weather[0].description}</p>`;
    }).catch(function(error){
      console.log("Error!", error);
    });


  }

  // on error
  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }













} else {
  console.log("geolocation is NOT available");
  output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
}
