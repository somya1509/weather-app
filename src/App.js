import { useState } from "react";
import Form from "./Form";
import "./App.css";
import Weather from "./Weather";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState([]);
  async function fetchData(e) {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const apiData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => data);

    if (city && country) {
      setWeather({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temp: Math.round(apiData.main.temp - 273.15),
        error: "",
      });
    } else {
      setWeather({
        data: "",
        city: "",
        country: "",
        description: "",
        temp: "",
        error: "Please enter city and country name",
      });
    }
  }
  return (
    <div className="App">
      <h1> Weather App</h1>
      <Form getWeather={fetchData} />
      <Weather {...weather} />
      {console.log(weather.data)}
    </div>
  );
}

export default App;
