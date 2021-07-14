import React from "react";
import { TiWeatherCloudy } from "react-icons/ti";

const Weather = ({ description, city, country, error, temp }) => {
  function matchValues() {
    if (description) {
      const weatherDesc = description.split(" ");
      const keywords = ["cloudy", "clouds", "cloud", "overcast", "mist"];

      for (let i = 0; i < description.length; i++) {
        if (keywords.includes(weatherDesc[i])) {
          console.log("found a match", weatherDesc[i]);
          if (keywords.includes(weatherDesc[i])) {
            return (
              //   <img
              //     src="https://media.freestocktextures.com/cache/74/8b/748ba3fe5976d8b03219a64851d2790d.jpg"
              //     alt="clouds"
              //   />
              <TiWeatherCloudy size="50" />
            );
          }
        }
      }
    }
  }

  return (
    <div>
      {city && country && (
        <p>
          {city},{country}
        </p>
      )}
      {temp && <p>{temp} °C</p>}
      {description && <p>Conditions: {description}</p>}
      {error && <p>{error}</p>}
      {description && matchValues()}
    </div>
  );
};

export default Weather;
