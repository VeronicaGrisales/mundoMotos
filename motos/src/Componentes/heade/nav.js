/*import React from "react";
import "./nav.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Hamburg from "../imagenes/hamburguer.svg";
import Index from "../heade/index"
import Ventas from "../ventas/ventas";
import Registrarse from "../segundoComponente/registrarse";
import Iniciar from "../iniciarSesion/inicio";


const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (

    <Router>
    <div className="nav">
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">Harrnish</div>
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <img src={Hamburg} alt="logo" className="hamburger" />
            </div>
          </div>
        </div>
        <div
          className="nav-overlay"
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <ul className="nav-links">
            <li className="nav-item">
              <Link
                to="/Index"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? ".8s" : "0s",
                }}
              >
                Inicio
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                to="/index"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? ".9s" : "0s",
                }}
              >
                Servicios
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                to="/ventas"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1s" : "0s",
                }}
              >
                ¿Que ofrecemos?
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                to="/index"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.1s" : "0s",
                }}
              >
                Galeria
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                to="/index"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.2s" : "0s",
                }}
              >
                Expertos en
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                to="/index"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.3s" : "0s",
                }}
              >
                Contactanos
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                to="/registrarse"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.4s" : "0s",
                }}
              >
                Registrate
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link
                to="/inicio"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.5s" : "0s",
                }}
              >
                Iniciar Secion
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>
          </ul>
        </div>
        
        <Routes>
        <Route path="/ventas" element={<Ventas />}></Route>
        <Route path="/registrarse" element={<Registrarse />}></Route>
        <Route path= "/inicio"  element={<Iniciar />}></Route>
        </Routes>
        

      </div>
    </div>
    </Router>
  );
};

export default Nav;*/
