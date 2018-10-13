import transformForecast from './../servicies/transformForecast';
import transformWeather from './../servicies/transformWeather';

//la convierto en variable const
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
export const SET_WEATHER = 'SET_WEATHER';


//actionCreator es una accion que despues se pasa al dispatch
//type identificador
const setCity = payload => ({ type : SET_CITY , payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA , payload});

const getWeatherCity = payload =>({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload =>({type: SET_WEATHER_CITY, payload});

const api_key = "bd434fdd89e9a0d4225203a34270c724";
const url= "http://api.openweathermap.org/data/2.5/forecast";
const url_weather= "http://api.openweathermap.org/data/2.5/weather";

export const setSelectedCity = payload => {

  //aca estoy utilizando el segundo parametro del
  //Redux Thunk -> getState que me devuelve el estado global de la app
    return (dispatch, getState) => {
    const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

    //activar en el estado un indicador de busqueda de datos del pronostico etendido
    dispatch(setCity(payload));

    //con esto lo que hago es decirle, que si se hizo el pedido hace menos de un minuto
    //no vuelva a pedir a la API el contenido para el forecastData
    const state = getState();
    const date = state.cities[payload] && state.cities[payload].forecastDataDate;

    const now = new Date();

    if (date && (now - date) < 1*60*1000){
      return;
    }
    return fetch(url_forecast).then(
      data => (data.json())
    ).then(
      weather_data => {
        const forecastData = transformForecast(weather_data);
        console.log(forecastData);

        // modificar el estado con el result de la promise (fetch)
        dispatch(setForecastData( {city: payload , forecastData}))
      }
    );

  }
};

export const setWeather = payload => {

  return dispatch => {
    payload.forEach(city => {

      dispatch(getWeatherCity(city));

      const api_weather = `${url_weather}?q=${city}&appid=${api_key}`;
      fetch(api_weather).then ( data => {
        return data.json();
      }).then( weather_data => {
        const weather = transformWeather(weather_data);

        dispatch(setWeatherCity({city, weather}));
      });
    });
  }
};

//todo esto vincula la ciudad actual y el forecast pidiendo al servidor los datos con el fetch
