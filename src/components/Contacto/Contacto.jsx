import React from 'react'
import "./Contacto.css"
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Contacto() {
    return (
        <div className='bg'>
            <Navbar />

         
            <section id="contacto" className="contacto">
                <div className="contenido-seccion">
                    
                    <div className="fila">
                        <div className="col">
                        <h2>CONTACTO</h2>
                            <form action="https://formsubmit.co/binascode@gmail.com" method="POST">
                                <input type="text" name="name" placeholder="Tú Nombre" />
                                <input type="text" name="phone" placeholder="Número telefónico" />
                                <input type="email" name="email" placeholder="Dirección de correo" />
                                <textarea id="" cols="30" rows="3" name="mensage" placeholder="Mensaje"></textarea>
                                <button type="submit">
                                    Enviar Mensaje <i className="fa-solid fa-paper-plane"></i>
                                    <span className="overlay"></span>
                                </button>
                                <input type="hidden" name="_next" value="https://react-binas-code.vercel.app/" />
                                <input type="hidden" name="_captcha" value="false" />

                            </form>

                        </div>
                        <div className="col">
                            <div className="info">
                                <ul>
                                    <li>
                                        <i className="fa-solid fa-location-dot"></i>
                                        Calle 6 415, Córdoba, Mexico
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-mobile-screen"></i>
                                        Llamame: +52 2711577862
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-envelope"></i>
                                        Email: gymknockout.20@gmail.com

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

            <Footer />
        </div>
    )
}
