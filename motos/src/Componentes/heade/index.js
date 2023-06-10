import React, { Component } from "react";
import "./index.css";
import Logo from "../logo/logoMundomotos";
import Buscar from "./buscador/buscador";
import Hamburguer from '../imagenes/hamburguer.svg'
class Header extends Component {
  render() {
    return (
      <body>
        <header className="header" id="inicio">
          <Buscar />
          <div className="carrito">
            <i className="bx bx-cart" />
          </div>
          <img src={Hamburguer} alt="logo" className="hamburger" />
          <div className="menu_principal">
            <nav className="menu_registro">
              <a href="#">Inicio</a> <br />
              <a href="#">Servicios</a> <br />
              <a href="#">¿Que ofrecemos?</a> <br />
              <a href="#">Galeria</a> <br />
              <a href="#">Expertos en</a> <br />
              <a href="#">Contactanos</a> <br />
              <a href="#">Registrate</a> <br />
              <a href="#">Iniciar Secion</a> <br />
            </nav>
          </div>
          <div className="contenedor head">
            <Logo />
            <h1 className="titulo">
              Visítanos y convierte tus sueños en realidad
            </h1>
            <p className="copy">
              Tenemos los mejores productos del mercado y a mejor precio.
            </p>
          </div>
        </header>
        <main>
          <section className="contenedor" id="servicio">
            <h2 className="subtitulo">Nuestros Servicios</h2>
            <div className="contenedor_servicio">
              <img
                src="../la_pagina_web/buscamos la moto de tus sueños.jpg"
                alt=""
              />
              <div className="checklist_servicio">
                <div className="service">
                  <h3 className="n_service">
                    <span className="number">1 </span> Venta de Motos
                  </h3>
                  <p>
                    En mundo motos, tenemos el gusto de ofrecerle a nuestra
                    exclusiva clientela, las mejores motocicletas, de todos los
                    precios y para todos los gustos. Ademas de garantizarle
                    repuestos de la mejor calidad.
                  </p>
                </div>
                <div className="service">
                  <h3 className="n_service">
                    <span className="number">2 </span> Mantenimiento y Ensamble
                  </h3>
                  <p>
                    Nuestros técnicos especializados estarán a su disponibilidad
                    24/7.
                  </p>
                </div>
                <div class="service">
                  <h3 className="n_service">
                    <span className="number">3 </span> Accesorios
                  </h3>
                  <p>
                    Contamos con todos los implementos para que luzcas fabulos@
                    en tu vehículo, de excelente calidad y si es de tu
                    preferencia personalizado.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="gallery" id="portafolio">
            <div className="contenedor">
              <h2 className="subtitulo">Galería</h2>
              <div className="contenedor_galeria">
                <img
                  src="../la_pagina_web/accesorio 1.jpg"
                  alt=""
                  className="img-principal"
                />
                <img
                  src="../la_pagina_web/accesorio chaqueta.jpg"
                  alt=""
                  className="img-principal"
                />
                <img
                  src="../la_pagina_web/cuatri moto 1.jpg"
                  alt=""
                  className="img-principal"
                />
                <img
                  src="../la_pagina_web/herramienta.jpg"
                  alt=""
                  className="img-principal"
                />
                <img
                  src="../la_pagina_web/llaves herramienta.jpg"
                  alt=""
                  className="img-principal"
                />
                <img
                  src="../la_pagina_web/llantas.jpg"
                  alt=""
                  className="img-principal"
                />
                <img
                  src="../la_pagina_web/motocicletas para niños.jpg"
                  alt=""
                  className="img-principal"
                />
              </div>
            </div>
          </section>
          <div className="container-img">
            <img src="" alt="" class="img-show" />
            <i className="bx bx-x"></i>
            <p class="copyl"></p>
          </div>
          <section className="contenedor" id="expertos">
            <h2 className="subtitulo">Somos expertos en:</h2>
            <section className="experts">
              <div className="cont_expert">
                <img src="../la_pagina_web/repuestos.jpg" alt="" />
                <h3 className="n_expert">Mantenimiento</h3>
              </div>
              <div className="cont_expert">
                <img src="../la_pagina_web/moto personalizada.png" alt="" />
                <h3 className="n_expert">Personalización</h3>
              </div>
              <div className="cont_expert">
                <img src="../la_pagina_web/seguridad2.png" alt="" />
                <h3 className="n_expert">Seguridad</h3>
              </div>
            </section>
          </section>
        </main>
      </body>
    );
  }
}

export default Header;
