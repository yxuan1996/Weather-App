import { useState } from 'react'
import { Outlet, NavLink, Link, useLoaderData, redirect, useNavigation, useSubmit} from "react-router-dom";
import { Theme, Navbar, Button, Form, Input, Dropdown, Badge } from 'react-daisyui'

export default function Root() {

    return (
        <>
            <Navbar className="fixed top-0 w-full flex justify-between bg-blue-800/40 text-stone-100">
            <div className="">
                <Button tag="a" className="text-xl normal-case" color="ghost">
                Weather App
                </Button>
            </div>
            <div className="">
                <Form>
                <Input bordered type="text" placeholder="Search" className="w-24 md:w-auto" />
                </Form>
            </div>
            <div>
                <Dropdown end>
                <Button tag="label" tabIndex={0} color="ghost" className="avatar" shape="circle">
                    <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </Button>
                <Dropdown.Menu className="w-52 menu-sm mt-3 z-[1] p-2">
                    <li>
                    <a className="justify-between">
                        Profile
                        <Badge>New</Badge>
                    </a>
                    </li>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
            </Navbar>

            <div className="bg-[url('../src/assets/city-background-night-1.png')] bg-cover bg-center h-screen">
                
            </div>
        </>
    )
}