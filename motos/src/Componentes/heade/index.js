import React, { Component } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logo from "../logo/logoMundomotos";
import Hamburguer from "../imagenes/hamburguer.svg";
import Sueño from "../imagenes/buscamos la moto de tus sueños.jpg";
import Acce1 from "../imagenes/accesorio-1.jpg";
import Acce2 from "../imagenes/accesorio-chaqueta.jpg";
import Acce3 from "../imagenes/cuatri-moto-1.jpg";
import Acce4 from "../imagenes/herramienta.jpg";
import Acce5 from "../imagenes/llaves-herramienta.jpg";
import Acce6 from "../imagenes/llantas.jpg";
import Acce7 from "../imagenes/motocicletas-para-niños.jpg";
import Expert1 from "../imagenes/repuestos.jpg";
import Expert2 from "../imagenes/moto personalizada.png";
import Expert3 from "../imagenes/seguridad2.png";
import Foot from "../tercerComponente/footer";
import Mapa from "../mapa/mapa";
import Ventas from "../ventas/ventas";
import Registrarse from "../segundoComponente/registrarse";
import Inicio from "../iniciarSesion/inicio";

class Mundo extends Component {
  render() {
    return (
      <body>
        <header className="prin" id="inicio">
          <div className="contenedor head">
            <Logo />
            <div className="logui" id="main-container">
              <ul className="ul">
                <li className="menuncito">
                  <a className="a" href="#inicio">
                    Inicio
                  </a>
                </li>
                <li className="menuncito">
                  <a className="a" href="#servicio">
                    Servicios
                  </a>
                </li>
                <li className="menuncito">
                  <a className="a" href="#portafolio">
                    Galeria
                  </a>
                </li>
                <li className="menuncito">
                  <a className="a" href="#expertos">
                    {" "}
                    Expertos en{" "}
                  </a>
                </li>
                <li className="menuncito">
                  <a className="a" href="#mapa">
                    Ubicación
                  </a>
                </li>
                <li className="menuncito">
                  <a className="a" href="#contacto">
                    {" "}
                    Contacto
                  </a>
                </li>
              </ul>
              <Router>
                <div className="rut">
                  <div className="enlaces">
                    <ul className="ul">
                      <li className="menuncito">
                        <Link className="men" to="/ventas">
                          Ventas
                        </Link>
                      </li>
                      <li className="menuncito">
                        <Link className="men" to="/registrarse">
                          Registrarse
                        </Link>
                      </li>
                      <li className="menuncito">
                        <Link className="men" to="/inicio">
                          Iniciar sesión
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Routes>
                    <Route path="/ventas" element={<Ventas />}></Route>
                    <Route
                      path="/registrarse"
                      element={<Registrarse />}
                    ></Route>
                    <Route path="/inicio" element={<Inicio />}></Route>
                  </Routes>
                </div>
              </Router>
            </div>
            <div className="text">
              <h1 className="titulo">
                Visítanos y convierte tus sueños en realidad
              </h1>
              <p className="copy">
                Tenemos los mejores productos del mercado y a mejor precio.
              </p>
            </div>
          </div>
        </header>
        <main>
          <section className="contenedor" id="servicio">
            <h2 className="subtitulo">Nuestros Servicios</h2>
            <div className="contenedor_servicio">
              <img src={Sueño} alt="" />
              <div className="checklist_servicio">
                <div className="service">
                  <h3 className="n_service">
                    <span className="number">1 </span>{" "}
                    <p className="acc">Venta de Motos</p>
                  </h3>
                  <p className="mm">
                    En mundo motos, tenemos el gusto de ofrecerle a nuestra
                    exclusiva clientela, las mejores motocicletas, de todos los
                    precios y para todos los gustos. Ademas de garantizarle
                    repuestos de la mejor calidad.
                  </p>
                </div>
                <div className="service">
                  <h3 className="n_service">
                    <span className="number">2 </span>{" "}
                    <p className="acc">Mantenimiento y Ensamble</p>
                  </h3>
                  <p className="mm">
                    Nuestros técnicos especializados estarán a su disponibilidad
                    24/7.
                  </p>
                </div>
                <div class="service">
                  <h3 className="n_service">
                    <span className="number">3 </span>{" "}
                    <p className="acc">Accesorios</p>
                  </h3>
                  <p className="mm">
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
                <img src={Acce1} alt="" className="img-principal" />
                <img src={Acce2} alt="" className="img-principal" />
                <img src={Acce3} alt="" className="img-principal" />
                <img src={Acce4} alt="" className="img-principal" />
                <img src={Acce5} alt="" className="img-principal" />
                <img src={Acce6} alt="" className="img-principal" />
                <img src={Acce7} alt="" className="img-principal" />
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
                <img src={Expert1} alt="" />
                <h3 className="n_expert">Mantenimiento</h3>
              </div>
              <div className="cont_expert">
                <img src={Expert2} alt="" />
                <h3 className="n_expert">Personalización</h3>
              </div>
              <div className="cont_expert">
                <img src={Expert3} alt="" />
                <h3 className="n_expert">Seguridad</h3>
              </div>
            </section>
          </section>
          <section className="ubicacion" id="mapa">
            <div>
              <h2 className="subtitulo">Nuestra ubicación</h2>
              <p className="ubb">
                Acá, te compartimos nuestra ubicación hacia nuestro local físico{" "}
                <br></br>
              </p>
              <p className="negra">
                <b className="r">¡Te esperamos!</b>
              </p>
            </div>
            <div className="mapita">
              <Mapa />
            </div>
          </section>
        </main>
        <section id="contacto">
          <div className="con">
            <>
              <Foot />
            </>
          </div>
        </section>
      </body>
    );
  }
}

export default Mundo;
