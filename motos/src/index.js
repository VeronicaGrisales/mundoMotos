import React from 'react';
import ReactDOM from'react-dom/client';
import Ventas from './Componentes/primerComponente/primerComponente';
import Componente from './Componentes/segundoComponente/segundoComponente';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render (
    <>
    <Componente/>
    <Ventas/>
    </>
    );

