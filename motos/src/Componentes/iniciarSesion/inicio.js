import React from 'react';
/*import ReactDOM from'react-dom/client';*/
import './inicio.css'

/*const root = ReactDOM.createRoot(document.getElementById('root'));*/

function Inicio(){
    return (
        <body className='major'>
            <nav className='menu'>
                <a href='./index.js'>Inicio</a>
            </nav>
            <section className='inicioSesion'>
            <form>
                <h1 className='title'>Iniciar sesion</h1>
                <label>
                <i className='bx bxs-user'></i>
                <input placeholder="Nombre de usuario" data-testid="nombre" type="text" id="username" required></input>
                </label>
                <label>
                <i className='bx bxs-lock-alt'></i>
                <input placeholder="Contraseña" data-testid="contraseña" type="password" id="password" required></input>
                </label>
                <a href="#" className="link">Olvido su Contraseña?</a>
                <input  data-testid="boton" type='submit' disabled></input>
            </form>
            </section>
           
        </body>
    )
}

/*root.render (Inicio)*/

export default Inicio;