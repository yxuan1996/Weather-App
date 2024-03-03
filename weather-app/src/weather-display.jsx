import { Outlet, NavLink, Link, useLoaderData, Form, redirect, useNavigation, useSubmit, useOutletContext} from "react-router-dom";
import React, {useState, useEffect, useReducer} from 'react';
import { Card , Button, Hero} from 'react-daisyui'
import { matchSorter } from "match-sorter";

// export async function loader({ query }) {
//     const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=aeb54fa8b02a43c5be0134913240203&q=${query}`) 
//     const status = response.status;
//     const data = await response.json();
//     console.log(data)
//     return data ?? null;
//   }

async function call_weather_api({ query }) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=aeb54fa8b02a43c5be0134913240203&q=${query}`) 
    const status = response.status;
    const data = await response.json();
    console.log(data)
    return data ?? null;
  }

  export default function WeatherDisplay() {
    const {
        weatherLoc: [weatherLocation],
        tempUnit: [temperatureUnit]
      } = useOutletContext();

    console.log('WeatherLocation')
    console.log(weatherLocation)

    const [weatherData, setWeatherData] = useState("");
    const [locationData, setLocationData] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=aeb54fa8b02a43c5be0134913240203&q=${weatherLocation}`) 
        const status = response.status;
        if (status == 400){
          console.log('Location not found')
          // Raise alert notification
        } else {
          const data = await response.json();
          console.log(data.current)
          console.log(data.location)
          console.log(data.current.condition.text)
          setWeatherData(data.current)
          setLocationData(data.location)
        }
        

      }
    
      fetchData();
      // forceUpdate()
    }, [weatherLocation])

    // const { weatherData } = useLoaderData();

    return (
      <>

    <Hero >
      <Hero.Content className="text-center text-white">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold">{locationData.name}</h2>
          <h3 className="text-2xl">{locationData.localtime}</h3>
          <div className="flex flex-col">
            <div className="flex flex-row justify-center items-stretch">
              {/* <p>{weatherData.condition.icon}</p>
              <img src={"https:" + weatherData.condition.icon} alt="WeatherIcon" style="flex: 1; object-fit: cover;" /> */}
              {(temperatureUnit=="C") ? (
                <h1 className="text-6xl font-bold">{weatherData.temp_c}°C</h1>
              ) : (
                <h1 className="text-6xl font-bold">{weatherData.temp_f}°F</h1>
              )}
            </div>
            <div>
              {/* <h2 className="text-3xl">{weatherData.condition.text}</h2> */}
            </div>
            <div>
              {(temperatureUnit=="C") ? (
                <h2 className="text-3xl">Feels Like: {weatherData.feelslike_c}°C</h2>
              ) : (
                <h2 className="text-3xl">Feels Like: {weatherData.feelslike_f}°F</h2>
              )}
            </div>
            <div>
              <h2 className="text-3xl">Humidity: {weatherData.humidity}%</h2>
            </div>
            <div>
              {(temperatureUnit=="C") ? (
                <h2 className="text-3xl">Wind: {weatherData.wind_kph}kph</h2>
              ) : (
                <h2 className="text-3xl">Wind: {weatherData.wind_mph}mph</h2>
              )}
            </div>
          </div>
  
        </div>
      </Hero.Content>
    </Hero>
      </>
    )
}