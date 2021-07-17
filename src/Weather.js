import React from "react";
import { TiWeatherCloudy } from "react-icons/ti";

const Weather = ({ description, city, country, error, temp }) => {
  function matchValues() {
    if (description) {
      const weatherDesc = description.split(" ");
      const keywords = ["cloudy", "clouds", "cloud", "overcast", "mist"];
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
      {description && matchValues()}
      {temp && <p className="weather_temp">{temp} °C</p>}
      {description && <p className="weather_desc">{description}</p>}
      {error && <p className="weather_error">{error}</p>}
    </div>
  );
};

export default Weather;
