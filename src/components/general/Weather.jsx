import React, { useState } from 'react'
import axios from 'axios'
import { StyledMain } from '../styled/Main.styled'
import { StyledWeather } from '../styled/Weather.styled'

function Weather() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=660b34c82a365741e350ad28fb2d9231`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <StyledMain>
        <StyledWeather>
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              <p>Feels Like</p>
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
            </div>
            <div className="humidity">
              <p>Humidity</p>
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            </div>
            <div className="wind">
              <p>Wind Speed</p>
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
            </div>
          </div>
        }



      </div>
      </StyledWeather>
    </StyledMain>
  );
}

export default Weather;
