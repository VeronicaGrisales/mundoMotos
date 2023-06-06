import React from 'react';
import ReactDOM from'react-dom/client';
import Ventas from './Componentes/primerComponente/ventas';
import Registrarse from './Componentes/segundoComponente/registrarse';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
    <Registrarse/>
    <Ventas/>
    </>
    );