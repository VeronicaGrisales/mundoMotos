import React from 'react';
/*import ReactDOM from'react-dom/client';*/
import './ventas.css'
import Footer from '../tercerComponente/footer'
import Lightbox from '../lightbox/lightbox';
import accesorio1 from '../imagenes/accesorio-1.jpg';
import accesorio2 from '../imagenes/accesorio-2.jpg';
import accesorio3 from '../imagenes/accesorio-3.jpg';
import accesorio4 from '../imagenes/accesorio-4.jpg';
import accesorio5 from '../imagenes/accesorio-5.jpg';
import accesorio6 from '../imagenes/accesorio-6.jpg';
import chaqueta from '../imagenes/accesorio-chaqueta.jpg';
import cuatrimoto1 from '../imagenes/cuatri-moto-1.jpg';
import cuatrimotofamilia from '../imagenes/cuatri-moto-familia.jpg';
import cuatrimotoniño from '../imagenes/cuatrimoto-niño.jpg';
import fondo from '../imagenes/fondo.jpg';
import herramienta from '../imagenes/herramienta.jpg';
import llantas from '../imagenes/llantas.jpg';
import llaves from '../imagenes/llaves-herramienta.jpg';
import logo from '../imagenes/logo.png';
import repuestos from '../imagenes/repuestos.jpg';
import boxer from '../imagenes/moto- boxer-125-2.jpg';
import moto from '../imagenes/moto-superior-a-125-1.jpg';
import motocicletaNiño from '../imagenes/motocicletas-para-niños.jpg';
import moto2 from '../imagenes/moto-superior-a-125-2.jpg';
import moto3 from '../imagenes/moto-superior-a-125- 4.jpg';
import moto4 from '../imagenes/moto-superior-125-6.jpg';
import moto5 from '../imagenes/moto-superior-125-5.jpg';
import moto6 from '../imagenes/moto-superio-a-125-3.jpg';
import moto7 from '../imagenes/moto-scooter-1.jpg';
import moto8 from '../imagenes/moto-menor-a-125-1.jpg';
import moto9 from '../imagenes/moto-enduro-4.jpg';
import moto10 from '../imagenes/moto-enduro-3.jpg';
import moto11 from '../imagenes/moto-enduro-2.jpg';
import moto12 from '../imagenes/moto-enduro-1.jpg';
import principal from '../imagenes/po-fondo.jpg';
import boxer2 from '../imagenes/moto-boxer-125-1.jpg'
import Buscador from '../heade/buscador/buscador'


/*const root = ReactDOM.createRoot(document.getElementById('root'));*/

function Ventas(){
    return (
        <body className='sales'>
            <Buscador />
        <header className='principal' id='inicio'>

            <nav className='menu-navegacion'>
                <a href='index.js'>Inicio</a>
            </nav>
            <div className='carrito'>
                <i class='bx bxs-cart'></i>
            </div>
            <div className='contenedor head'>
                <h1 className='titulo'>Que ofrecemos</h1>
                <p className='copy'>
                    Mundo motos, le ofrece gran variedad de artículos, donde encontraras varios estilos para
                    ti y toda tu familia. Contamos con gran variedad de accesorios y repuestos. Te invitamos 
                    a seguirnos en nuestras plataformas digitaleso en nuestra tienda fisísca
                </p>
            </div>
        </header>
        <main>
            <section className='gallery'>
                <div className='contenedor'>
                <p className='copy'>
                    Si quieres ver todos nuestros prodructos en un genial Lightbox te invitamos a que des
                    click en el siguiente boton 👇 <br></br>
                    <Lightbox />
                </p>
                </div>
            </section>
            <section className='gallery' id='motos'>
                <div className='contenedor'>
                    <h2 className='subtitulo'>Motos</h2>
                    <p className='copy'>
                    En esta sección encontraras varias de nuestras motos de excelente calidad, contamos con motocicletas para niños,
                    o si eres de esas personas que te gusta salir a explorar otros aires contamos con ciertas motocicletas de muy buena calidad,
                    ademas tenemos un descuento del 15% para adquirir el combo familiar.
                    <b>¡No te lo pierdas!</b>
                    </p>                   
                    <div className='contenedor-galeria'>
                    <img src={cuatrimoto1} alt="" class="img" />
                    <div className='informacion'>
                        <h2 className='subtituloo'>
                            Cuatrimoto TRX 520 Rubicon <br></br> Modelo 2023
                        </h2>
                        <p className='inf'>
                            Color: personalizado <br></br>
                            Cilindraje: 518 cc <br></br>
                            Tipo de motor 4 tiempos (OHV) <br></br>  Refrigerado por liquido <br></br>
                            Potencia maxima: 28,3 HP <br></br>
                            Valor: $65.790.000
                        </p>
                        <div className='carrito'>
                            <i class='bx bxs-cart'></i>
                        </div>
                 </div>
                </div>
                <div className='contenedor-galeria'>
                <img src={motocicletaNiño} alt="" class="img"></img>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        Moto cross CRF 50F Modelo <br></br> 2022
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: 49 cc <br></br>
                        Tipo de motor: 4 tiempos 2 <br></br> valvúlas (SOHC) Refrigerado por aire <br></br>
                        Potencia maxima: 3 HP @ 8,500 MIN-1 <br></br>
                        Valor: $9.750.000
                    </p>
                    <div className='carrito'>
                            <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src={moto2} alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        Ninja H2 2023
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: 998 cc <br></br>
                        Tipo de motor: 4 tiempos <br></br> sobrealimentado de cuatro cilindro <br></br>
                        Valor: $95.980.000
                    </p>
                    <div className='carrito'>
                            <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src={moto3} alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        YZF-R6 2023
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: 599 cc <br></br>
                        Tipo de motor: 4 tiempos (DOCH) <br></br> Refrigerado por liquido <br></br>
                        Potencia maxima: 116,7 HP a 14500 rpm <br></br>
                        Valor: $64.990.000
                    </p>
                    <div className='carrito'>
                             <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src={moto4} alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        Harley-Davidson capitan <br></br> america Chopper 1969
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: cc <br></br>
                        Tipo de motor: 4 valvulas (SOHC) <br></br> refrigerado por liquido <br></br>
                        Potencia maxima: 19,3 HP a 10000 rmp <br></br>
                        Valor: $15.450.000
                    </p>
                    <div className='carrito'>
                             <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src={moto5} alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        Chopper Harley-Davidsson <br></br> Panhead
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: 73,22 cc <br></br>
                        Potencia maxima: 60 HP a 6000 <br></br> rpm <br></br>
                        Valor: $97.807.223
                    </p>
                    <div className='carrito'>
                        <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src={moto6} alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        R15 2024
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: 1,923 cc <br></br>
                        Potencia maxima: 102 HP a 5020 rpm <br></br>
                        Valor: $15.450.000
                    </p>
                    <div className='carrito'>
                        <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src={moto10} alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        Motos enduro XTZ-250 2012
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: 249 cc <br></br>
                        Tipo de motor: 4T (SOCH) Refrigerado <br></br> por aire y aceite <br></br>
                        Potencia maxima: 20,4 HP a 8000 rpm <br></br>
                        Valor: $25.500.000
                    </p>
                    <div className='carrito'>
                        <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src={moto11} alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        Suzuki DR-200SE
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: 199 cc <br></br>
                        Tipo de motor: 4 tiempos (SOCH) <br></br> refrigerado por aire y aceite <br></br>
                        Potencia maxima: 20 HP a 8500 rpm <br></br>
                        Valor: $25.500.000
                    </p>
                    <div className='carrito'>
                        <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src={moto12} alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        KTM 350 SX-F 2023
                    </h2>
                    <p className='inf'>
                        Color personalizad <br></br>
                        Cilindraje: 349,7 cc <br></br>
                        Tipo de motor: 4 tiempos monocilindrico <br></br>
                        Potencia maxima: 20,4  HP a 8000 rpm <br></br>
                        Valor: $56.900.000 
                    </p>
                    <div className='carrito'>
                         <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src={moto9} alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        Yamaha YZ125 2022
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: 125 cc <br></br>
                        Tipo de motor: 4 tiempos cilindrico <br></br>
                        Potencia maxima: 20,4 HP a 8000 rpm <br></br>
                        Valor: $63.599.000
                    </p>
                    <div className='carrito'>
                            <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src={boxer} alt="" width={600} class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        BOXER S PRO
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: 102 cc <br></br>
                        Tipo de motor: 4 tiempos monocilindrico <br></br>
                        Potencia maxima: 7,59 HP a 7500 rpm <br></br>
                        Valor: $5.499.000
                    </p>
                    <div className='carrito'>
                            <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src={boxer2} alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        Boxer S
                    </h2>
                    <p className='inf'>
                    Color: personalizado <br></br>
                        Cilindraje: 102 cc <br></br>
                        Tipo de motor: 4 tiempos monocilindrico <br></br>
                        Potencia maxima: 7,59 HP a 7500 rpm <br></br>
                        Valor: $5.499.000
                    </p>
                    <div className='carrito'>
                            <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src={cuatrimotoniño} alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        Cuatrimoto YFM90R
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: 90 cc <br></br>
                        Tipo de motor: 4 tiempo (SOCH), 2 valvulas, <br></br> refrigeradopor aire <br></br>
                        Potencia maxima: 7.59 HP a 7500 rpm <br></br>
                        Valor: $20.000.000
                    </p>
                    <div className='carrito'>
                             <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src={cuatrimotofamilia} alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        Cuatrimoto todos los tamaños
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: Desde 90 cc en adelante <br></br>
                        Tipo de motor: 4 tiempos monocilindrico <br></br>
                        Potencia maxima: 7,59 HP a 7500 rpm <br></br>
                        Valor: $5.499.000 en adelante...
                    </p>
                    <div className='carrito'>
                            <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                </div>
            </section>
            <section className='gallery' id='accesorios'>
                <div className='contenedor'>
                    <h2 className='subtitulo'>
                        Nuestros árticulos
                    </h2>
                    <p className='copy'>
                        Aqui podrás encontrar, artículos con los que cuenta nuestra tienda,
                        garantizados y de excelente calidad.
                    </p>
                    <div className='contenedor-galeria'>
                    <img src={accesorio1} alt="accesorio 1" class="img"/>
                    <div className='informacion'>
                        <h2 className='subtituloo'>
                            Kit de protección para motocicletas
                        </h2>
                        <p className='inf'>
                            Color: personalizado <br></br>
                            Descripción; Casco habatible, <br></br>
                             guantes con protección en nudillos <br></br> 
                             y botas impermeables <br></br>
                            Valor: $588.000
                        </p>
                        <div className='carrito'>
                                 <i class='bx bxs-cart'></i>
                        </div>
                    </div>
                    </div>
                    <div className='contenedor-galeria'>
                    <img src={chaqueta} alt="" class="img"/>
                    <div className='informacion'>
                        <h2 className='subtituloo'>
                            Chamarra de cuero
                        </h2>
                        <p className='inf'>
                            Color: personalizado <br></br>
                            Descripción: Chaqueta de proteccion para <br></br> motociclistas antifricción <br></br>
                            Valor: $208.710
                        </p>
                        <div className='carrito'>
                                 <i class='bx bxs-cart'></i>
                        </div>
                    </div>
                    </div>
                    <div className='contenedor-galeria'>
                    <img src={accesorio5} alt="" width={500} class="img"/>
                    <div className='informacion'>
                        <h2 className='subtituloo'>
                            Casco plano certificado
                        </h2>
                        <p className='inf'>
                            Color: personalizado <br></br>
                            Descripción: Casco integral tipo shoxx MT-KONTROL <br></br>
                            Valor: $261.862
                        </p>
                        <div className='carrito'>
                                <i class='bx bxs-cart'></i>
                        </div>
                    </div>
                    </div>
                    <div className='contenedor-galeria'>
                    <img src={accesorio2} alt="" class="img"/>
                    <div className='informacion'>
                        <h2 className='subtituloo'>
                            Kit para motociclista
                        </h2>
                        <p className='inf'>
                            Color: personalizado
                            Descripción: Chaqueta de piel, <br></br>
                            guantes icon persuit liso cuero, <br></br>
                            gafas oscuras con proteccion UV, <br></br>
                            casco ICH abatible certificado doble visor. <br></br>
                            Valor: $615.800
                        </p>
                        <div className='carrito'>
                                <i class='bx bxs-cart'></i>
                        </div>
                    </div>
                    </div>
                    <div className='contenedor-galeria'>
                    <img src={accesorio4} alt="" class="img"/>
                    <div className='informacion'>
                        <h2 className='subtituloo'>
                            Kit para motociclista
                        </h2>
                        <p className='inf'>
                            Color: personalizado <br></br>
                            Descripción: Chaqueya de piel vintage cool, <br></br>
                            guantes tacticos antideslizantes, <br></br>
                            gafas oscuras, <br></br>
                            casco KNT abatible donle visor. <br></br>
                            Valor: $458.200
                        </p>
                        <div className='carrito'>
                                <i class='bx bxs-cart'></i>
                        </div>
                    </div>
                    </div>
                    <div className='contenedor-galeria'>
                    <img src={accesorio3} alt="" width={500} class="img"/>
                    <div className='informacion'>
                        <h2 className='subtituloo'>
                            Kit para motociclista economico
                        </h2>
                        <p className='inf'>
                            Color: personalizado <br></br>
                            Descripción: Guantes 100% impermeables y termicos, <br></br>
                            gafas oscuras, <br></br>
                            casco KNT abatible doble visor. <br></br>
                            Valor: 458.200
                        </p>
                        <div className='carrito'>
                                <i class='bx bxs-cart'></i>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className='gallery' id='repuestos'>
                <div className='contenedor'>
                    <h2 className='subtitulo'>
                        Repuestos y herramientas
                    </h2>
                    <p className='copy'>
                    En esta sección encontrarás, artículos indispensables para el mantenimiento y buen funcionamiento de tu vehículo.
                    haz tu pedido y lo llevaremos hasta tu ubicación.
                    </p>
                    <div className='contenedor-galeria'>
                    <img src={herramienta} alt="" width={500} class="img"/>
                    <div className='informacion'>
                        <h2 className='subtituloo'>
                            Kit de herramientas <br></br> STANLEY X 60 pcs
                        </h2>
                        <p className='inf'>
                            Valor: $480.000
                        </p>
                        <div className='carrito'>
                                <i class='bx bxs-cart'></i>
                        </div>
                    </div>
                    </div>
                    <div className='contenedor-galeria'>
                    <img src={repuestos} alt="" width={550} class="img"/>
                    <div className='informacion'>
                        <h2 className='subtituloo'>
                            Kit de caja de piñones <br></br> genericos
                        </h2>
                        <p className='inf'>
                            Valor: $750.000
                        </p>
                        <div className='carrito'>
                                <i class='bx bxs-cart'></i>
                        </div>
                    </div>
                    </div>
                    <div className='contenedor-galeria'>
                    <img src={llaves} alt="" class="img"/>
                    <div className='informacion'>
                        <h2 className='subtituloo'>
                            Llaves mixtas
                        </h2>
                        <p className='inf'>
                            Valor: $15.000 c/u
                        </p>
                        <div className='carrito'>
                                <i class='bx bxs-cart'></i>
                        </div>
                    </div>
                    </div>
                    <div className='contenedor-galeria'>
                    <img src={llantas} alt="" width={550} class="img"/>
                    <div className='informacion'>
                        <h2 className='subtituloo'>
                            Llantas spot, lagarto, <br></br> pistera
                        </h2>
                        <p className='inf'>
                            Valor: $189.000
                        </p>
                        <div className='carrito'>
                                <i class='bx bxs-cart'></i>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <div className='container-img'>
                <img src={accesorio6} className='img-show'></img>
                <i class='bx bx-x'></i>
                <p className='copy1'></p>
            </div>
        </main>
        <Footer />
        </body>
        
    );
    
};

/*root.render (Ventas) */

export default (Ventas);
