import React from 'react';
/*import ReactDOM from'react-dom/client';*/
import './footer.css'

/*const root = ReactDOM.createRoot(document.getElementById('root'));*/

function Footer(){
    return (
        <footer id='contacto'>
        <div className='contenedor footer-content'>
          <div className='contact-us'>
            <h2 className='brand'>Mundo motos</h2>
            <p className='jj'>Somos expertos en la creación de tus sueños</p>
          </div>
          <div className='social-media'>
            <a href='#facebook' className='social-media-icon'>
              <i><i class='bx bxl-facebook'></i></i>
            </a>
            <a href='#twiter' className='social-media-icon'>
              <i><i class='bx bxl-twitter'></i></i>
            </a>
            <a href='#instagram' className='social-media-icon'>
              <i><i class='bx bxl-instagram'></i></i>
            </a>
          </div>
        </div>
        <div className='line'></div>
      </footer>
    );
  }
  


/*root.render (Footer)*/

export default Footer;