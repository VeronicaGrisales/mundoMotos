import React from 'react';
import ReactDOM from'react-dom/client';
import './inicio.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

function Inicio(){
    return (
        <body>
            <header>
            <nav className='menu'>
                <a href='./index.js'>Inicio</a>
            </nav>
            <section className='inicioSesion'>
            <form>
                <h1 className='title'>Iniciar sesion</h1>
                <label>
                <i class='bx bxs-user'></i>
                <input placeholder="Nombre de usuario" type="text" id="username"></input>
                </label>
                <label>
                <i class='bx bxs-lock-alt'></i>
                <input placeholder="Contraseña" type="password" id="password"></input>
                </label>
                <a href="#" class="link">Olvido su Contraseña?</a>
                <button id="button">Iniciar</button>
            </form>
            </section>
            
            </header>
        </body>
    )
}

root.render (Inicio)

export default Inicio;