import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './views/Home/Home.jsx';
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
  <div className='bg-gray-900'>
    <RouterProvider router={router} />
  </div>
)
