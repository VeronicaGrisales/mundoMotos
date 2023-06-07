import React from 'react';
import ReactDOM from'react-dom/client';
import Log from './Componentes/logo/logoMundomotos';
import Header from './Componentes/heade';
import Footer from './Componentes/tercerComponente/footer';
import Registrarse from './Componentes/segundoComponente/registrarse';
import Ventas from './Componentes/ventas/ventas';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
    <>
    <Ventas/>
    </>
    );

    /*
    <Header/>
    
    <Footer/>
    <Registrarse/>
    <Log/>
    */