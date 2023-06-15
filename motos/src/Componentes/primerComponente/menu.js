import React from 'react';
import ReactDOM from'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Ventas from '../ventas/ventas';
import Registrarse from '../segundoComponente/registrarse';
import IniciarSesion from '../iniciarSesion/inicio'

const root = ReactDOM.createRoot(document.getElementById('root'));

function Menu(){
    return (
        <Router>
            <div className='start'>
                <nav>
                    <div className='rutas'>
                    <ul className='browser'>
                        <div className='routes'>
                        <li>
                            <Link to="/ventas">Ventas</Link>
                        </li>
                        </div>
                        <div className='routes'>
                        <li>
                            <Link to="/registrarse">Registrarse</Link>
                        </li>
                        </div>
                        <div className='routes'>
                        <li>
                            <Link to="/inicio">Iniciar sesión</Link>
                        </li>
                        </div>
                    </ul>
                    </div>
                </nav>

                <Routes>
                <Route path="/ventas" element={<Ventas />}></Route>
                <Route path="/registrarse" element={<Registrarse />}></Route>
                <Route path= "/inicio"  element={<IniciarSesion />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

root.render (Menu);
export default Menu;
