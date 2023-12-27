let form = document.querySelector("form");
let input = document.querySelector("input");
let temp = document.querySelector(".temp");
let locality = document.querySelector(".time_location p");
let time_date = document.querySelector(".time_location span");
let weather_cond = document.querySelector(".weather-cond span");
let weather_icon = document.querySelector(".weather-cond img");
let container = document.querySelector(".container");




form.addEventListener('submit', function (e) {
  e.preventDefault();
  let value = input.value;

  const apiURL = "https://api.weatherapi.com/v1/current.json?key=9beb69517932462d8db31900231612&q=" + value + "&aqi=no";

  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      temp.innerText = data.current.temp_c;
      locality.innerText = data.location.name;
      time_date.innerText = data.location.localtime;
      weather_cond.innerText = data.current.condition.text;
      let imgSrc = data.current.condition.icon;
      weather_icon.src = "https://" + imgSrc.substring(2);
      console.log(data);


      /*if (data.current.condition.text == 'Sunny') {
        container.style.backgroundImage = "url('../Assets/sun.jpg')";
      }
      else if (data.current.condition.text == 'Clear') {
        container.style.backgroundImage = "url('../Assets/clear.jpg')";
      }
      else if (data.current.condition.text == 'Mist') {
        container.style.backgroundImage = "url('../Assets/mist.jpg')";
      }
      else if (data.current.condition.text == 'patchy rain possible') {
        container.style.backgroundImage = "url('../Assets/patchyRain.jpg')";
      }
      else if (data.current.condition.text == 'Moderate or heavy rain with thunder') {
        container.style.backgroundImage = "url('../Assets/thunderRain.jpg')";
      }
      else if (data.current.condition.text == 'Partly cloudy') {
        container.style.backgroundImage = "url('../Assets/cloudy.jpg')";
      }*/

    })

    .catch(error => {
      alert("Enter a valid city name");
      console.error('Error:', error);
    });

})