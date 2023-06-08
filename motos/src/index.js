import React from 'react';
import ReactDOM from'react-dom/client';
import Ventas from './Componentes/primerComponente/primerComponente';
import Componente from './Componentes/segundoComponente/segundoComponente';
import Header from './Componentes/heade';
import Footer from './Componentes/tercerComponente/footer';
import Registrarse from './Componentes/segundoComponente/registrarse';
//import Ventas from './Componentes/ventas/ventas';
import Menu from './Componentes/primerComponente/menu';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
    <>
    <Header/> 
    </>
    );

    {/*
    <Menu/> 
    <Header/>
    <Footer/>
    
    <Registrarse/>
    <Log/>
*/}