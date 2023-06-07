import React from 'react';
import ReactDOM from'react-dom/client';
import Log from './Componentes/heade/logo/logoMundomotos';
import Header from './Componentes/heade';
import Ventas from './Componentes/primerComponente/ventas';
import Footer from './Componentes/tercerComponente/footer';
import Registrarse from './Componentes/segundoComponente/registrarse';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
    <>
    <Registrarse/>
    </>
    );

    /*<Componente/>
    <Header/>
    <Footer/>
    <Ventas/>
    <Log/>*/