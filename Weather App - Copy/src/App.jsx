import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import axios from 'axios';

const APIKEY = '6fcf5c870680199c10e9dbebf90484b6'; // Replace with your actual API key

// const fetchData = async () => {
// //   try {
// //     const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName || "karachi"}&appid=${APIKEY}&units=metric`)
// //     console.log("response", response.data)
// //     setApiResponse(response.data)
// //     setIcon(response.data.weather[0].icon)
// //   } catch (error) {
// //     console.log("error", error.message)
// //   }

// // }


const apiResp = {
  "coord": {
    "lon": 67.0822,
    "lat": 24.9056
  },
  "weather": [
    {
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 33.9,
    "feels_like": 38.85,
    "temp_min": 33.9,
    "temp_max": 33.9,
    "pressure": 997,
    "humidity": 52,
    "sea_level": 997,
    "grnd_level": 994
  },
  "visibility": 6000,
  "wind": {
    "speed": 5.66,
    "deg": 250
  },
  "clouds": {
    "all": 20
  },
  "dt": 1748090417,
  "sys": {
    "type": 1,
    "id": 7576,
    "country": "PK",
    "sunrise": 1748047447,
    "sunset": 1748095992
  },
  "timezone": 18000,
  "id": 1174872,
  "name": "Karachi",
  "cod": 200
}




const fetchWeather = async (cityName = 'karachi') => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: cityName,
          appid: APIKEY,
          units: 'metric'
        }
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error.message);
    return null;
  }
};


function App() {
  const [city, setCity] = useState('');
  const [ApiResp, setApiResp] = useState('');


  return (
    <>
      <h1>Weather App</h1>
      <input type="text" onChange={(e) => setCity(e.target.value)} />
      <button onClick={fetchWeather}>Check</button>

      <h3>City: {city}</h3>
      <h3>Time: {new Date().toDateString()}</h3>
      <h3>Temperature: {apiResp?.main?.temp}</h3>
    </>
  );
}

export default App;
