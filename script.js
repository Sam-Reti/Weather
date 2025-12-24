const apiKey = "36f0b8b4daedbda7eb4429f0559338eb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial";

const search = document.getElementById("search");
const searchButton = document.getElementById("searchButton");
const weatherIcon = document.getElementById("weatherIcon");

document.getElementById("details").style.display = "none";

searchButton.addEventListener("click", () => {
  const splitName = search.value.split(",");
  const city = splitName[0].trim();
  const state = splitName[1].trim().toUpperCase();

  async function checkWeather() {
    const responce = await fetch(
      `${apiUrl}&q=${encodeURIComponent(`${city},${state},US`)}&appid=${apiKey}`
    );

    let data = await responce.json();
    document.querySelector("#city").innerHTML = data.name;
    //document.querySelector("#weatherType").innerHTML =
    // data.weather[0].description;
    document.querySelector("#temp").innerHTML =
      Math.round(data.main.temp) + "°F";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind").innerHTML =
      Math.round(data.wind.speed) + " mph";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/Drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }

    document.getElementById("details").style.display = "flex";

    console.log(data);
  }
  checkWeather();
});
