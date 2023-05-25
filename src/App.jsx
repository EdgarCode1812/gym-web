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
   
    <Navbar />
    <ComponentStart />
    <Slider/>
    <Coachs />
    <Footer />
    </>
  )
}

export default App
