import { useState } from 'react'
import { Outlet, NavLink, Link, useLoaderData, redirect, useNavigation, useSubmit} from "react-router-dom";
import { Theme, Navbar, Button, Form, Input, Dropdown, Badge } from 'react-daisyui'
import { FaSearch } from "react-icons/fa";

export default function Root() {

    const [weatherLocation, setWeatherLocation] = useState("London");
    const [temperatureUnit, setTemperatureUnit] = useState("C");
    const [inputValue, setInputValue] = useState("");

    function change_temp_unit() {
        if (temperatureUnit=="C"){
            setTemperatureUnit("F")
        } else {
            setTemperatureUnit("C")
        }
    }

    function search_weather() {
        setWeatherLocation(inputValue)
    }

    return (
        <>
            
            <div className="bg-[url('../src/assets/city-background-night-1.png')] bg-cover bg-center h-screen">
                <Navbar className="header sticky top-0 w-full flex flex-col sm:flex-row justify-between bg-blue-800/40 text-stone-100">
                <div className="">
                    <Button tag="a" className="text-xl normal-case" color="ghost">
                    Weather App
                    </Button>
                </div>
                <div className="text-black flex flex-row mb-2 sm:mb-0">
                        <Input 
                        bordered 
                        type="text" 
                        placeholder="Search" 
                        className="w-64 md:w-96" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}/>
                        <Button onClick={search_weather}>
                            <FaSearch />
                        </Button>
                </div>
                <div>
                    <Button color="accent" className="w-24" onClick={change_temp_unit}>
                        C / F
                    </Button>
                </div>
                </Navbar>

                <Outlet context={{
                    weatherLoc: [weatherLocation],
                    tempUnit: [temperatureUnit]
                }}/>
            </div>
        </>
    )
}