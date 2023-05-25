import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto.jsx';
import Precio from './components/Precios/Precio.jsx';
import Gym from './components/gym/Gym.jsx';
import Box from './components/box/Box.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, 
  {
    path: "Contacto",
    element: <Contacto />
  },
  {
    path: "Precios",
    element: <Precio />
  }, {
    path: "Box",
    element: <Box />
  }, {
    path: "Gym",
    element: <Gym />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <a href="https://api.whatsapp.com/send?phone=2711236028&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20paquetes." class="float animated animatedFadeInUp fadeInUp" target="_blank">
        <img src="/img/whatsapp.png" class="img-w" alt=""/>
       </a>
  </React.StrictMode>,
)
