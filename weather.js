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
    img.src = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=10&size=300x300&sensor=false&key=AIzaSyDknCfzL_AWW4JKmjlg5zUeJqVF_L07rdk`; 

    output.appendChild(img);

    // proceed with fetching the weather data from the openweathermap API
    var url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b937724d4d3febfcc804ce1e1965fc68&units=metric`;

    console.log(url);

    var weatherDiv = document.querySelector("#weather-out");

    fetch(url).then(function(res){
      console.log("res is:", res);
      return res.json();
    }).then(function(data){
      console.log("Parsed data is an object:", data);
      var imgSource = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      var tempC = Math.round(data.main.temp);
      var tempF = Math.round((data.main.temp*9/5)+32);
      var temp = tempC;
      var CelsOrFahr = "°C";

      var data1 = `<div id="weather-data"
                                style="padding: 2em;
                                        background: #fefefc;
                                        cursor: pointer">
                                <h5>${data.name}, ${data.sys.country}</h5>
                                <img id="weatherImg" src=${imgSource} />
                                <h5>${data.weather[0].description}</h5>
                                <h1>`

      var data2 =              `</h1>
                              </div>`;

      weatherDiv.innerHTML = data1 + `${temp} ${CelsOrFahr}` + data2;

      weatherDiv.addEventListener("click", () => {
        if (temp === tempC) {
          temp = tempF;
          CelsOrFahr = "°F";
        } else {
          temp = tempC;
          CelsOrFahr = "°C";
        }
        weatherDiv.innerHTML = data1 + `${temp} ${CelsOrFahr}` + data2;
      });



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
