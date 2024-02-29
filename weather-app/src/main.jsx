import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate, 
  useLocation
} from "react-router-dom";
import ErrorPage from "./error-page";
// import App from './App.jsx'
import Root from './root.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/Weather-App/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    // children: [
    //   {
    //     errorElement: <ErrorPage />,
    //     children: [
    //       { index: true, 
    //         element: <ProductListPage />,
    //         loader : productLoader,
    //       },
  
          
    //     ],
    //   },

    // ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <Root /> */}
      <RouterProvider router={router} />
  </React.StrictMode>,
)
