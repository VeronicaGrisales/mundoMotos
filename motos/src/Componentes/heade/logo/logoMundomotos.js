import React from "react";
import Logo from "../../../Componentes/la_pagina_web/logo.png";
import "./logoMundomotos.css";

function Log() {
  return (
    <div className="inicio" id="menu">
      <ul>
        <li id="logo">
          <a href="#">
            <img src={Logo} width={150} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Log;
