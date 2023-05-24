import { Component, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import ComponentStart from './components/componentStart/ComponentStart'
import Slider from './components/slider-gym/Slider'
import Coachs from './components/coachs/Coachs'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <a href="https://api.whatsapp.com/send?phone=2711236028&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20paquetes." class="float animated animatedFadeInUp fadeInUp" target="_blank">
     <img src="/img/whatsapp.png" class="img-w" alt=""/>
    </a>
    <Navbar />
    <ComponentStart />
    <Slider/>
    <Coachs />
    <Footer />
    </>
  )
}

export default App
