import React, { useEffect, useState } from 'react';
/*import ReactDOM from'react-dom/client';*/
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

/*const root = ReactDOM.createRoot(document.getElementById('root'));*/

const containerStyle ={
  width: '400px',
  height: '400px'
}

const Mapa = ()=>{ 
  const [coordenadas, setCoordenadas] = useState(null);

  useEffect(()=>{
    const latitud = 6.2488205;
    const longitud = -75.5763065;
    setCoordenadas({lat: latitud, lng: longitud});
  }, []);

  return (
    <LoadScript googleMapsApiKey='AIzaSyCWSda7b7myI0pdV7jcd_cBwK15y-8_-lY'>
    <GoogleMap
    mapContainerStyle={containerStyle}
    center={coordenadas}
    zoom={15}
    >
    {coordenadas && <Marker position={coordenadas}/>}
    </GoogleMap>
    </LoadScript>
  )
}

/*root.render (Mapa) */

export default Mapa