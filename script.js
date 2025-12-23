const apiKey = "36f0b8b4daedbda7eb4429f0559338eb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial";

const search = document.getElementById("search");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
  let city = document.createElement("span");
  city.textContent = search.value;

  async function checkWeather() {
    const responce = await fetch(
      apiUrl + `&q=${search.value}` + `&appid=${apiKey}`
    );

    let data = await responce.json();
    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#weatherType").innerHTML =
      data.weather[0].description;

    const img = document.createElement("img");
    img.src = data.weather[0].icon;
    img.className = "img";

    document.querySelector("#temp").innerHTML =
      Math.round(data.main.temp) + "°";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind").innerHTML =
      Math.round(data.wind.speed) + " MPH";

    weather.append(img);

    console.log(data);
  }
  checkWeather();
});
