import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../pages/login'
import Almoxarifado from '../pages/almoxarifado'
import Home from '../pages/Home'

export default function index() {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home/>
        },
        {
            path:  "/entrar",
            element: <Login/>
        },
        {
            path: "/almoxarifado",
            element: <Almoxarifado/>
        }
    ])
  return (
    <RouterProvider router={router}/>
  )
}
