import React from 'react';
import ReactDOM from'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Componente(){
    return <h1>Mi primer componente</h1>;
}

root.render(Componente());