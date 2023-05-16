import React from 'react'
import "./Navbar.css"

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
                <a href="#">GYM WEB</a>
            </div>
            <nav id="nav">
                <ul>
                    <li><a href="#inicio" >INICIO</a></li>
                    <li><a href="#sobremi" >NOSOTROS</a></li>
                    <li><a href="#curriculum" >SITIO WEB PERFECTO</a></li>
                    <li><a href="#paquetes" >PRECIOS</a></li>
                    <li><a href="#contacto" >CONTACTO</a></li>
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
