import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './views/Home/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Detail from './views/Detail/Detail.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/detail/:movieId",
    element: <Detail/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navbar/>
    <RouterProvider router={router} />
  </>
)
