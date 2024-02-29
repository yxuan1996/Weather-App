import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Theme, Navbar, Button, Form, Input, Dropdown, Badge } from 'react-daisyui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Navbar>
      <div className="flex-1">
        <Button tag="a" className="text-xl normal-case" color="ghost">
          daisyUI
        </Button>
      </div>
      <div className="flex-none gap-2">
        <Form>
          <Input bordered type="text" placeholder="Search" className="w-24 md:w-auto" />
        </Form>
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


      <h1>Vite + React</h1>
      <Button color="primary">Click me!</Button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> 
  )
}

export default App
