import React from "react";
import "./nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburg from "../imagenes/hamburguer.svg";
import Index from "../heade/index"

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
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
              <link
                to="/index"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? ".8s" : "0s",
                }}
              >
                Inicio
              </link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <link
                to="/index"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? ".9s" : "0s",
                }}
              >
                Servicios
              </link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <link
                to="/index"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1s" : "0s",
                }}
              >
                ¿Que ofrecemos?
              </link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <link
                to="/index"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.1s" : "0s",
                }}
              >
                Galeria
              </link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <link
                to="/index"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.2s" : "0s",
                }}
              >
                Expertos en
              </link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <link
                to="/index"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.3s" : "0s",
                }}
              >
                Contactanos
              </link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <link
                to="/index"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.4s" : "0s",
                }}
              >
                Registrate
              </link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <link
                to="/index"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.5s" : "0s",
                }}
              >
                Iniciar Secion
              </link>
              <div className="nav-item-wrapper"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
