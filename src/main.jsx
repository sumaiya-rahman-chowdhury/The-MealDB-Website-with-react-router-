import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Details from './Details';



const router = createBrowserRouter([
  {
    path:'/',
    loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/random.php'),
    element:<Home></Home>,
    children:[
      {
        path:'/foods',
        loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a'),
        element:<About></About>
      },
      {
        path:'/foods/:idMeal',
        loader:({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
        element: <Details></Details>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
