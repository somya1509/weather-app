import React from "react";
import { TiWeatherCloudy } from "react-icons/ti";

const Weather = ({ description, city, country, error, temp, humidity,pressure,wind }) => {
    console.log(humidity,"humidity")
  function matchValues() {

    if (description) {
      const weatherDesc = description.split(" ");
      const keywords = ["cloudy", "clouds", "cloud", "overcast"];
      const arrayfiltered = keywords.some((ele) => weatherDesc.includes(ele));
      if (arrayfiltered) {
        return <TiWeatherCloudy size="50" />;
      } else {
        return "";
      }
    }
  }

  return (
    <div className="weather_show">
      {city && country && (
        <p className="weather_city">
          {city},{country}
        </p>
      )}
      <div>
        {description && matchValues()}
        {temp && <p className="weather_temp">{temp} °C</p>}
      </div>
      {description && <p className="weather_desc">{description}</p>}
      {humidity && <p>humidity: {humidity}</p>}
      {pressure && <p>Pressure: {pressure}</p>}
      {wind && <p>Wind: {wind}</p>}


      {error && <p className="weather_error">{error}</p>}
    </div>
  );
};

export default Weather;
