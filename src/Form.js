import React from "react";

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.getWeather}>
        <input type="text" placeholder="Enter your city name" name="city" />
        <input type="text" placeholder="Enter country" name="country" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
