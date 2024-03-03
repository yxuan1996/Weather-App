import { useState } from 'react'
import { Outlet, NavLink, Link, useLoaderData, redirect, useNavigation, useSubmit} from "react-router-dom";
import { Theme, Navbar, Button, Form, Input, Dropdown, Badge } from 'react-daisyui'
import { FaSearch } from "react-icons/fa";

export default function Root() {

    const [weatherLocation, setWeatherLocation] = useState("London");
    const [temperatureUnit, setTemperatureUnit] = useState("C");

    return (
        <>
            
            <div className="bg-[url('../src/assets/city-background-night-1.png')] bg-cover bg-center h-screen">
                <Navbar className="header sticky top-0 w-full flex justify-between bg-blue-800/40 text-stone-100">
                <div className="">
                    <Button tag="a" className="text-xl normal-case" color="ghost">
                    Weather App
                    </Button>
                </div>
                <div className="text-black">
                    <Form className='flex flex-row'>
                        <Input bordered type="text" placeholder="Search" className="w-40 md:w-96" />
                        <Button type="submit" value="Submit">
                            <FaSearch />
                        </Button>
                    </Form>
                </div>
                <div>
                    <Button color="accent" className="w-24">
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