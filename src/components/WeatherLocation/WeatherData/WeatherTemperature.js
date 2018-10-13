import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE} from './../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const icons = {

  [SUN]: "day-sunny",
  [RAIN] : "rain",
  [SNOW] : "snow",
  [THUNDER] : "day-thunderstorm",
  [DRIZZLE] : "day-showers",
  [CLOUD]: "day-cloudy",
};

const getWeatherIcon = weatherState => {
const icon = icons[weatherState];

const sizeIcon = "3x";

  if (icon)
  return <WeatherIcons className="wIcon" name={icon} size={sizeIcon} />;
  else
    return <WeatherIcons className="wIcon" name={"day-sunny"} size={sizeIcon} />;


}

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weatherTemperatureConst">
    {
      getWeatherIcon(weatherState)
    }
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperatureType">{` ºC`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
