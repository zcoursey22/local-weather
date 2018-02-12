$(document).ready(function() {

  let lat, lon = 0

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = Math.round(position.coords.latitude);
      let lon = Math.round(position.coords.longitude);

      var api = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;

      $.getJSON(api, function(data) {
        $(".location").html(data.name);
        $(".icon").attr("src", data.weather[0].icon);
        $(".weather").html(data.weather[0].description);
        $(".temperature").html(Math.round(data.main.temp * 9/5 + 32) + " \u00B0F");
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
