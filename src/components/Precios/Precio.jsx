import React from 'react'
import "./Precio.css"
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'
import Bgvideo from '../bg-video/Bg-video'

export default function Precio() {
    return (
        <div>
            <Navbar />
            <Bgvideo title="Nuestros Precios" url="/video/video-bg3.mp4"/>
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
                                <p><img src="/img/box.svg" className='img-cheque' alt="" /> <img src="/img/gym.svg" width={30} alt="" /> 3 personas $800</p>
                                <p><img src="/img/gym.svg" width={30} alt="" /> 6 personas $1380</p>
                                </div>
                           
                            </li>
                            <li className="buy"><a href="https://api.whatsapp.com/send?phone=2711236028&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20paquete%20Basic." target="_blank"><button>Inscribirme</button></a></li>
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
                                <p><img src="/img/gym.svg" width={30} alt="" /> 2 personas $600</p>
                                <p><img src="/img/box.svg" className='img-cheque' alt="" /> 2 personas $600</p>
                            </div>
                            </li>
                            <li className="buy"><a href="https://api.whatsapp.com/send?phone=2711236028&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20paquete%20Plus." target="_blank"><button>Inscribirme</button></a></li>
                        </ul>
                    </div>
                    <div className="promo third scale">
                        <h4 className="title-paquetes">Individual</h4>
                        <ul className="features">
                            <li className="brief">Paquetes de una persona</li>
                            <li className=""><img src="/img/icons/grafico-de-barras.gif" width="16%" alt="" /></li>
                            <li className="price"><img src="/img/pesa.png" width={50} alt="" /></li>
                            <li className='d-flex justify-content-center'>
                                <div className="text-start">
                                <p><img src="/img/box.svg" className='img-cheque' alt="" /> <img src="/img/gym.svg" width={30} alt="" /> 1 persona $500</p>
                                <p><img src="/img/box.svg" className='img-cheque' alt="" /> 1 persona $250</p>
                                <p><img src="/img/gym.svg" width={30} alt="" /> Horario controlado  $200</p>
                            </div>
                            </li>
                            <li className="buy"><a href="https://api.whatsapp.com/send?phone=2711236028&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20paquete%20Premium." target="_blank"><button>Inscribirme</button></a></li>
                        </ul>
                    </div>
                </div>
            </section>

            </div>
            <Footer />
        </div>
    )
}
