import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';


export default function Navbar() {
    
    let menuVisible = false;
    //Función que oculta o muestra el menu
    function mostrarOcultarMenu(){
        if(menuVisible){
            document.getElementById("nav").classList ="";
            menuVisible = false;
        }else{
            document.getElementById("nav").classList ="responsive";
            menuVisible = true;
        }
    }
    
    function seleccionar(){
        //oculto el menu una vez que selecciono una opcion
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }
  return (
    <div>
    <div className="contenedor-header">
        <header>
            <div className="logo">
                <Link to="/"> <img src="/img/logoNavbar.png" width={100} alt="" /></Link>
            </div>
            <nav id="nav">
                <ul>
                    <li><Link to="/">INICIO</Link></li>
                    <li><Link to="/">GYM</Link></li>
                    <li><Link to="/">BOX</Link></li>
                    <li><Link to="/Precios">PRECIOS</Link></li>
                    <li><Link to="/Contacto">CONTACTO</Link></li>
                </ul>
            </nav>
            <div className="nav-responsive" onClick={mostrarOcultarMenu}>
               <img src="/img/barra-de-menus.png" width={38} alt="" />
            </div>
        </header>
    </div>

    </div>
  )
}
