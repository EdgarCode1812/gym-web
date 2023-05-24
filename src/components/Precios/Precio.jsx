import React from 'react'
import "./Precio.css"
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Precio() {
    return (
        <div>
            <Navbar />
            <div className="bg-video-wrap">
                <div className="brightness">
                    <video autoPlay={true} loop={true} muted={true} src="/video/video-bg3.mp4">
                    </video>
                </div>

                <div className="overlay">
                </div>
                <div className="center-div text-center">
                    <div className="margin-top">
                        <img src="/img/logo.png" width="150px" alt="" />
                        <p className="pt-5">Nuestros precios</p>


                    </div>
                </div>
            </div>

            <div className="section">

            <section id="paquetes" className="paquetes">
        
                <div className="promos pt-3">
                    <div className="promo first">
                        <h4 className="title-paquetes">Grupal</h4>
                        <ul className="features">
                            <li className="brief">3 0 6 personas</li>
                            <li className=""><img src="/img/icons/monitor.gif" width="16%" alt="" /></li>
                            <li className="price"><img src="/img/grupo.png" width={50} alt="" /></li>
                            <li className='d-flex justify-content-center'>
                                <div className="text-start">
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> 3 personas gym y box $800</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> 6 personas solo gym $1380</p>
                                </div>
                           
                            </li>
                            <li className="buy"><a href="https://api.whatsapp.com/send?phone=2711236028&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20paquete%20Basic." target="_blank"><button>Contrata Basic</button></a></li>
                        </ul>
                    </div>
                    <div className="promo second">
                        <h4 className="title-paquetes">Pareja</h4>
                        <ul className="features">
                            <li className="brief">2 personas Gymbro o Gymlove</li>
                            <li className=""><img src="/img/icons/cohete.gif" width="16%" alt="" /></li>
                            <li className="price"><img src="/img/gimnasia.png" width={50} alt="" /></li>
                            <li className='ps-5 d-flex justify-content-center'>
                                <div className="text-start">
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> 2 personas solo gym $600</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> 2 personas solo box $600</p>
                            </div>
                            </li>
                            <li className="buy"><a href="https://api.whatsapp.com/send?phone=2711236028&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20paquete%20Plus." target="_blank"><button>Contrata Plus</button></a></li>
                        </ul>
                    </div>
                    <div className="promo third scale">
                        <h4 className="title-paquetes">Individual</h4>
                        <ul className="features">
                            <li className="brief">Paquete individual de una persona</li>
                            <li className=""><img src="/img/icons/grafico-de-barras.gif" width="16%" alt="" /></li>
                            <li className="price"><img src="/img/pesa.png" width={50} alt="" /></li>
                            <li className='d-flex justify-content-center'>
                                <div className="text-start">
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> 1 persona Box y Gym  $500</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> 1 persona solo box   $250</p>
                                <p><img src="/img/icons/cheque.png" className='img-cheque' alt="" /> 1 persona horario controlado  $200</p>
                            </div>
                            </li>
                            <li className="buy"><a href="https://api.whatsapp.com/send?phone=2711236028&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20paquete%20Premium." target="_blank"><button>Contrata Premium</button></a></li>
                        </ul>
                    </div>
                </div>
            </section>

            </div>
            <Footer />
        </div>
    )
}