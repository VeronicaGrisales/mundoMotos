import React from "react";
import logo from '../imagenes/logo.png'
import './logoMundomotos.css';


function Log() {
  return (
    <div className="inicio" id="menu">
      <ul>
        <li id='logo'>
          <a href='#' >
            <img src={logo} width={150} alt='' />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Log;
