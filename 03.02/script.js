function klimat() {
  const city = document.getElementById("input").value;
  const api =
    "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric";

  fetch(api)
    .then((response) => {
      if (!response.ok) {
        throw new Error("API дұрыс емес");
      }
      return response.json();
    })
    .then((data) => {
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = ` 
                <p>City: ${data.name}</p> 
                <p>Temperature: ${data.main.temp} °C</p> 
              `;
    })
    .catch((error) => {
      console.error("Error fetching the weather data:", error);
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<p>Ондай қала жоқ</p>`;
    });
}
