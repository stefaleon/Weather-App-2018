if ("geolocation" in navigator) {
  console.log("geolocation is available");
  var output = document.getElementById("geolocation-out");

  // call geolocation.getCurrentPosition
  navigator.geolocation.getCurrentPosition(success, error);

  output.innerHTML = "<p>Locating…</p>";

  // on geolocation.getCurrentPosition success
  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = `<p>Latitude is ${latitude}° <br>Longitude is ${longitude}°</p>`;

    var img = new Image();
    img.src = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=10&size=300x300&sensor=false`;

    output.appendChild(img);

    // proceed with fetching the weather data from the openweathermap API
    var url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b937724d4d3febfcc804ce1e1965fc68&units=metric`;

    console.log(url);

    var weatherDiv = document.querySelector("#weather");

    fetch(url).then(function(res){
      console.log("res is:", res);
      return res.json();
    }).then(function(data){
      console.log("Parsed data is an object:", data);
      var imgSource = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      var tempC = Math.round(data.main.temp) + "°C";
      var tempF = Math.round((data.main.temp*9/5)+32) + "°F";
      weatherDiv.innerHTML = `<p>${data.name}, ${data.sys.country}</p>
                              <img id="weatherImg" src=${imgSource} />
                              <p>${data.weather[0].description}</p>
                              <p>${tempC} / ${tempF}</p>`;
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
