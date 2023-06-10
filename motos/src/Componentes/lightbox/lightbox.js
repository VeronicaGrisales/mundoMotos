import React, {useState} from "react";
import ReactModal from 'react-modal';
import './lightbox.css'
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

const Lightbox =() => {
    const [isOpen, setIsOpen] = useState(false);
    const [antes, despues] = useState(0);
    const imagen = [accesorio1, accesorio2, accesorio3, accesorio4, accesorio5, chaqueta, cuatrimotoniño,
    herramienta, llantas, llaves, repuestos, boxer, motocicletaNiño, moto2, moto3, moto4, moto6, moto7,
    moto5, moto8, moto9, moto11, moto12, boxer2];

    const openLightbox = () => {
        setIsOpen(true);
    };

    const closeLightbox = ()=> {
        setIsOpen(false);
    };

    const siguienteImagen = () => {
        const next = (antes + 1 ) % imagen.length;
        despues(next);
    }

    const anteriorImagen = ()=> {
        const anterior = (antes - 1 + imagen.length) % imagen.length
        despues (anterior);
    }

    return (
        <div className="lightbox">
            <button className="abrir" onClick={openLightbox}>Abrir lightbox</button>

            <ReactModal
            isOpen={isOpen}
            onRequestClose={closeLightbox}
            contentLabel="Lightbox"
            >
                <img src= {imagen[antes]} />  
                <button className="anterior" onClick={anteriorImagen}>Anterior</button>
                <button className="siguiente" onClick={siguienteImagen}>Siguiente</button>
                <button className="cerrar" onClick={closeLightbox}>X</button>
            </ReactModal>
        </div>
    );
};

export default Lightbox;

 /* <img src={cuatrimoto1} />
                <img src={cuatrimotoniño}/>
                <img src={boxer}/>
                <img src={motocicletaNiño}/>
                <img src={moto2}/>
                <img src={moto11}/>
                <img src={moto12}/>
                <img src={moto3}/>
                <img src={moto4}/>
                <img src={moto5}/>
                <img src={moto6}/>
                <img src={moto8}/>
                <img src={moto7}/>
                <img src={moto9}/>                
                <img src={boxer2}/>
                <img src={accesorio2} />
                <img src={accesorio3}/>
                <img src={accesorio1}/>
                <img src={accesorio4}/>
                <img src={accesorio5}/>
                <img src={chaqueta}/>
                <img src={herramienta}/>
                <img src={llantas}/>
                <img src={llaves}/>
                <img src={repuestos}/>*/