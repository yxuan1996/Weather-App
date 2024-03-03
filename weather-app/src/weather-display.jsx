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
          console.log(data)
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
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <Button color="primary">Get Started</Button>
        </div>
      </Hero.Content>
    </Hero>
      </>
    )
}