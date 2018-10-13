import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';

const renderForecastItemDays = (forecastData) => {
  return forecastData.map( forecast =>(
    <ForecastItem key={`${forecast.weekDay}${forecast.hour}`}
      weekDay={forecast.weekDay}
      hour={forecast.hour}
      data={forecast.data}
    />
  ))
}

const renderProgress = () => {
  return <h4>"Cargando Pronostico extendido..."</h4>

}

const ForecastExtended = ({city, forecastData}) => (

      <div>
        <h3 className='forecastTitle'> Pronostico Extendido para {city} </h3>
        {forecastData ?
          renderForecastItemDays(forecastData) :
          renderProgress() }

      </div>


);

ForecastExtended.propTypes = {
  city : PropTypes.string.isRequired,
  forecastData : PropTypes.array,
}
export default ForecastExtended;
