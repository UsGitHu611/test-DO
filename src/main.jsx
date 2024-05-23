import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import CurrentCountry from './components/CurrentCountry.jsx';
import CountryList from "./components/CountryList.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/country",
    element: <CountryList />
  },
  {
    path: "/country/:countryName",
    element: <CurrentCountry />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
