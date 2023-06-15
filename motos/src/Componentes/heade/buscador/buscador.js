import React from 'react';
/*import  ReactDOM  from 'react-dom/client';*/
import './buscador.css'

/*const root = ReactDOM.createRoot(document.getElementById('root'))*/

function Buscar() {
  return (
    <div className="buscador">
      <input type="tex" placeholder="Buscar" />
      <button type="submit">
        <h1>Aceptar</h1>
      </button>
      <div className="btn">
        <i className="bx bx-search" />
      </div>
    </div>
  );
}
/*root.render(Buscar);*/
export default Buscar;
