# Weather App



&nbsp;
## 00 Initial

* Use the *Skeleton* responsive CSS boilerplate.
* Custom styling in *css/weather.css*.
* Logic in *weather.js*.



&nbsp;
## 01 Geolocation

* Display the current location.


&nbsp;
## 02 Get weather data

* Fetch weather data from the OpenWeatherMap API.


&nbsp;
## 03 Improvements

* Tidy up code and display more weather data.


&nbsp;
## 04 Toggle C/F

* Add logic for toggling between Celsius and Fahrenheit.


&nbsp;
## 05 cors-anywhere.herokuapp.com

* In order to unblock the https restrictions for the github pages deployment, add the *cors-anywhere.herokuapp.com* in the beginning of the url for the OpenWeatherMap API.

```
https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/...
```


&nbsp;
## 06 Google Static Maps API

* Get a key for the Google Static Maps API in order to display the map in all browsers.

  * Go to Developer Console -> APIs & auth -> APIs
  
    * Search for Geocoding and click on Google Maps Geocoding API -> Enable API.
    * Search for Geolocation and click on Google Maps Geolocation API -> Enable API.
    * Ensure that the APIs are enabled for the specific project.

  * Go to [Google Static Maps API ](https://developers.google.com/maps/documentation/static-maps/support?authuser=0) and get a key for the specific project.
