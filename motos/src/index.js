import React from 'react';
import ReactDOM from'react-dom/client';
import Header from './Componentes/heade/index';
import Footer from './Componentes/tercerComponente/footer';
import Registrarse from './Componentes/segundoComponente/registrarse';
import Ventas from './Componentes/ventas/ventas';
import Menu from './Componentes/primerComponente/menu';
import Buscar from './Componentes/heade/buscador/buscador';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
    <>
    <Header/>
    </>
    );

    {/*
    <Buscar/>
    <Menu/> 
    
    <Footer/>
    <Registrarse/>
    <Log/>
*/}