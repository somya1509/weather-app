import React from "react";
import "./Form.scss"

const Form = (props) => {
  return (
    <div className="weather_app">
      <form onSubmit={props.getWeather}>
        <input type="text" placeholder="Enter your city name" name="city" />
        <input type="text" placeholder="Enter country" name="country" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
