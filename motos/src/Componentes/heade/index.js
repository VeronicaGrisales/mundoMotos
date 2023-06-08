import React, { Component } from 'react';
import './index.css';
import Logo from '../logo/logoMundomotos';
import Buscar from './buscador/buscador';


class Header extends Component {
    render(){
        return(
            <body> 
                <header>
            <div className="header" id='inicio'>
                <Buscar/>

                <div className='carrito'>
                    <i className='bx bx-cart'/>
                </div>
                <img src='#' alt="logo" className='hamburger'/>
                <div className='menu_principal'>
                    <nav className='menu_registro'>
                        <a href='#'>Inicio</a> <br/>
                        <a href='#'>Servicios</a> <br/>
                        <a href='#'>¿Que ofrecemos?</a> <br/>
                        <a href='#'>Galeria</a> <br/>
                        <a href='#'>Expertos en</a> <br/>
                        <a href='#'>Contactanos</a> <br/>
                        <a href='#'>Registrate</a> <br/>
                        <a href='#'>Iniciar Secion</a> <br/>                        
                    </nav>
                </div>
                <div className='contenedor head'>                    
                    <Logo/>
                    <h1 className='titulo'>Visítanos y convierte tus sueños en realidad</h1>
                    <p className='copy'>Tenemos los mejores productos del mercado y a mejor precio.</p>
                </div>
            </div>
            </header>


            </body>
        );
    }
}

export default Header