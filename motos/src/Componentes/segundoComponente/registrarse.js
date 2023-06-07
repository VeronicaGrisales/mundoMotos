import React from 'react';
import ReactDOM from'react-dom/client';
import './registro.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

function Registrarse () {
    
    return (
        <body>
    <section className='form-register'>

        <h4>Formulario de registro</h4>

        <input className='controls' type='texto' name='nombres' id='nombres' placeholder='Ingrese su Nombre'></input>
        <input className='controls' type='texto' name='apellidos' id='apellidos' placeholder='Ingrese su Apellido'></input>
        <input className='controls' type='email' name='correo' id='correo' placeholder='Ingrese su Correo electronico'></input>
        <input className='controls' type='password' name='contraseña' id='contraseña' placeholder='Ingrsese su Contrseña'></input>
        
        <p>
            Estoy de acuerdo con 
            <a href='#'> terminos y condiciones</a>
        </p>

        <button className='boton'>Registrarse</button>
        <p>
        <a href='#'>
        ¿Ya tengo cuenta?
        </a>
        </p>
    </section>
    </body>
    );
};

export default Registrarse;