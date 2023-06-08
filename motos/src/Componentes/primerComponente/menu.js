import React from 'react';
import ReactDOM from'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Ventas from '../ventas/ventas';
import Registrarse from '../segundoComponente/registrarse';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Menu(){
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/ventas">Ventas</Link>
                        </li>
                        <li>
                            <Link to="/registrarse">Registrarse</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                <Route path="/ventas" element={<Ventas />}></Route>
                <Route path="/registrarse" element={<Registrarse />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

root.render (Menu);
export default Menu;