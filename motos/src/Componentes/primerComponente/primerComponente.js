import React from 'react';
import ReactDOM from'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Ventas(){

    return (
        <body>
        <header className='header' id='inicio'>
            <nav className='menu-navegacion'>
                <a href='index.js'>Inicio</a>
            </nav>
            <div className='carrito'>
                <i></i>
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
                    <img src="./la_pagina_web/cuatri moto 1.jpg" alt="" class="img" />
                    <div className='informacion'>
                        <h2 className='subtituloo'>
                            Cuatrimoto TRX 520 Rubicon Modelo 2023
                        </h2>
                        <p className='inf'>
                            Color: personalizado <br></br>
                            Cilindraje: 518 cc <br></br>
                            Tipo de motor 4 tiempos (OHV)  Refrigerado por liquido <br></br>
                            Potencia maxima: 28,3 HP <br></br>
                            Valor: $65.790.000
                        </p>
                        <div className='carrito'>
                            <i class='bx bxs-cart'></i>
                        </div>
                 </div>
                </div>
                <div className='contenedor-galeria'>
                <img src="./la_pagina_web/motocicletas para niños.jpg" alt="" class="img"></img>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        Moto cross CRF 50F Modelo 2022
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: 49 cc <br></br>
                        Tipo de motor: 4 tiempos 2 valvúlas (SOHC) Refrigerado por aire <br></br>
                        Potencia maxima: 3 HP @ 8,500 MIN-1 <br></br>
                        Valor: $9.750.000
                    </p>
                    <div className='carrito'>
                            <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src="./la_pagina_web/moto superior a 125 2.jpg" alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        Ninja H2 2023
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: 998 cc <br></br>
                        Tipo de motor: 4 tiempos sobrealimentado de cuatro cilindro <br></br>
                        Valor: $95.980.000
                    </p>
                    <div className='carrito'>
                            <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src="./la_pagina_web/moto superior a 125  4.jpg" alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        YZF-R6 2023
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: 599 cc <br></br>
                        Tipo de motor: 4 tiempos (DOCH) Refrigerado por liquido <br></br>
                        Potencia maxima: 116,7 HP a 14500 rpm <br></br>
                        Valor: $64.990.000
                    </p>
                    <div className='carrito'>
                             <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src="./la_pagina_web/moto superior 125 6.jpg" alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        Harley-Davidson capitan america Chopper 1969
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: cc <br></br>
                        Tipo de motor: 4 valvulas (SOHC) refrigerado por liquido <br></br>
                        Potencia maxima: 19,3 HP a 10000 rmp <br></br>
                        Valor: $15.450.000
                    </p>
                    <div className='carrito'>
                             <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src="./la_pagina_web/moto superior 125 5.jpg" alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        Chopper Harley-Davidsson Panhead
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: 73,22 cc <br></br>
                        Potencia maxima: 60 HP a 6000 rpm <br></br>
                        Valor: $97.807.223
                    </p>
                    <div className='carrito'>
                        <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src="./la_pagina_web/moto superio a 125 3.jpg" alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        R15 2024
                    </h2>
                    <p className='informacion'>
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
                <img src="./la_pagina_web/moto enduro 3.jpg" alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        Motos enduro XTZ-250 2012
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: 249 cc <br></br>
                        Tipo de motor: 4T (SOCH) Refrigerado por aire y aceite <br></br>
                        Potencia maxima: 20,4 HP a 8000 rpm <br></br>
                        Valor: $25.500.000
                    </p>
                    <div className='carrito'>
                        <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src="./la_pagina_web/moto enduro 2.jpg" alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        Suzuki DR-200SE
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: 199 cc <br></br>
                        Tipo de motor: 4 tiempos (SOCH) refrigerado por aire y aceite <br></br>
                        Potencia maxima: 20 HP a 8500 rpm <br></br>
                        Valor: $25.500.000
                    </p>
                    <div className='carrito'>
                        <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src="./la_pagina_web/moto enduro 1.jpg" alt="" class="img"/>
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
                <img src="./la_pagina_web/moto endur 4.jpg" alt="" class="img"/>
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
                <img src="./la_pagina_web/moto boxer 125 2.jpg" alt="" class="img"/>
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
                <img src="./la_pagina_web/moto boxer 125 1.jpg" alt="" class="img"/>
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
                <img src="./la_pagina_web/cuatrimoto niñ@ 1.jpg" alt="" class="img"/>
                <div className='informacion'>
                    <h2 className='subtituloo'>
                        Cuatrimoto YFM90R
                    </h2>
                    <p className='inf'>
                        Color: personalizado <br></br>
                        Cilindraje: 90 cc <br></br>
                        Tipo de motor: 4 tiempo (SOCH), 2 valvulas, refrigeradopor aire <br></br>
                        Potencia maxima: 7.59 HP a 7500 rpm <br></br>
                        Valor: $20.000.000
                    </p>
                    <div className='carrito'>
                             <i class='bx bxs-cart'></i>
                    </div>
                </div>
                </div>
                <div className='contenedor-galeria'>
                <img src="./la_pagina_web/cuatri moto familia.jpg" alt="" class="img"/>
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
                    <img src="./la_pagina_web/accesorio 1.jpg" alt="" class="img"/>
                    <div className='informacion'>
                        <h2 className='subtituloo'>
                            Kit de protección para motocicletas
                        </h2>
                        <p className='inf'>
                            Color: personalizado <br></br>
                            Descripción; Casco habatible, guantes con protección en nudillos y botas impermeables <br></br>
                            Valor: $588.000
                        </p>
                        <div className='carrito'>
                                 <i class='bx bxs-cart'></i>
                        </div>
                    </div>
                    </div>
                    <div className='contenedor-galeria'>
                    <img src="./la_pagina_web/accesorio chaqueta.jpg" alt="" class="img"/>
                    <div className='informacion'>
                        <h2 className='subtituloo'>
                            Chamarra de cuero
                        </h2>
                        <p className='inf'>
                            Color: personalizado <br></br>
                            Descripción: Chaqueta de proteccion para motociclistas antifricción <br></br>
                            Valor: $208.710
                        </p>
                        <div className='carrito'>
                                 <i class='bx bxs-cart'></i>
                        </div>
                    </div>
                    </div>
                    <div className='contenedor-galeria'>
                    <img src="./la_pagina_web/accesorio 5.jpg" alt="" class="img"/>
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
                    <img src="./la_pagina_web/accesorio 2.jpg" alt="" class="img"/>
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
                    <img src="./la_pagina_web/accesorio 4.jpg" alt="" class="img"/>
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
                    <img src="./la_pagina_web/accesorio 3.jpg" alt="" class="img"/>
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
                    <img src="./la_pagina_web/herramienta.jpg" alt="" class="img"/>
                    <div className='informacion'>
                        <h2 className='subtituloo'>
                            Kit de herramientas STANLEY X 60 pcs
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
                    <img src="./la_pagina_web/repuestos.jpg" alt="" class="img"/>
                    <div className='informacion'>
                        <h2 className='subtituloo'>
                            Kit de caja de piñones genericos
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
                    <img src=".//la_pagina_web/llaves herramienta.jpg" alt="" class="img"/>
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
                    <img src="./la_pagina_web/llantas.jpg" alt="" class="img" id="llantas"/>
                    <div className='informacion'>
                        <h2 className='subtituloo'>
                            Llantas spot, lagarto, pistera
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
        </main>
        </body>
    );
    
};

root.render (Ventas)

export default Ventas;