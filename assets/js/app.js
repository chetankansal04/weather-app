const apiKeyAccu = "d4NtR8ERxJNVYChFcoH6DmnOyPfFYl0A";
const apiKeyOpen = "01003dc267bc80f0ccaf3acdb01f9abd";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value;

  if (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyOpen}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const temperature = Math.round(data.main.temp);
        const cityName = data.name;
        weatherInfo.innerHTML = `<h3>${cityName}</h3>
            <p>Temperature: ${temperature}°C</p>`;
      })

      .catch(error => {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = '<p>City not found</p>';
        });
  }
});
