$(document).ready(function() {

  let lat, lon = 0

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      var api = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;

      $.getJSON(api, function(data) {
        $(".location").html(data.name);
        $(".weather").html(data.weather[0].description);
        $(".temperature").html(Math.round(data.main.temp * 9/5 + 32) + " \u00B0F");

        switch (data.weather[0].main) {
          case "Rain":
            $(".icon").attr("src", "images/414925-weather/png/010-rain-3.png");
            break;
          case "Clouds":
            $(".icon").attr("src", "images/414925-weather/png/003-cloudy-4.png");
            break;
          case "Clear":
            $(".icon").attr("src", "images/414925-weather/png/050-sun.png");
            break;
          case "Snow":
            $(".icon").attr("src", "images/414925-weather/png/008-snow-1.png");
            break;
          case "Thunderstorm":
            $(".icon").attr("src", "images/414925-weather/png/012-rain-2.png");
            break;
          case "Drizzle":
            $(".icon").attr("src", "images/414925-weather/png/002-drop.png");
            break;
          default:
            $(".icon").attr("src", "images/414925-weather/png/007-rainbow-3.png");
        }

      });
    });
  }

});

let temp = document.querySelector('.temperature');
let btn = document.querySelector('button');

function switchUnits() {
  if (temp.textContent[temp.textContent.length - 1] === "C") {
    temp.textContent = temp.textContent.substring(0, temp.textContent.length - 3);
    temp.textContent = Math.round(temp.textContent * 9/5 + 32) + " \u00B0F";
    btn.textContent = "Switch to \u00B0C";
  } else {
    temp.textContent = temp.textContent.substring(0, temp.textContent.length - 3);
    temp.textContent = Math.round((temp.textContent - 32) * 5/9) + " \u00B0C";
    btn.textContent = "Switch to \u00B0F";
  }
}
