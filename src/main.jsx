import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto.jsx';
import Precio from './components/Precios/Precio.jsx';

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
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
