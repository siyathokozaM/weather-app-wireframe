let searchWeather = (response) => {
  console.log(response.data);
  let roundedTemp = Math.round(response.data.temperature.current);
  let humidity = (document.querySelector(
    "#humid"
  ).innerHTML = `${response.data.temperature.humidity}%`);

  let wndRounded = Math.round(response.data.wind.speed);
  let wind = (document.querySelector(
    "#wind"
  ).innerHTML = ` ${wndRounded} km/h`);
  let temp = (document.querySelector("#temp").innerHTML = `${roundedTemp}℃`);
  let cloudCoverage = (document.querySelector("#coverage").innerHTML =
    response.data.condition.description);
};

function search() {
  let searchInput = document.querySelector("#search").value;
  let city = (document.querySelector(".city").innerHTML = searchInput);

  let apiKey = "4824o763a0a4e436tb063a409ba4f083";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput}&key=${apiKey}&units=imperial`;

  axios(apiUrl).then(searchWeather);
}
