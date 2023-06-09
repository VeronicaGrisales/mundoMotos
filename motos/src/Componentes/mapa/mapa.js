import React from 'react';
import ReactDOM from'react-dom/client';
import { GoogleMap, LoadScript} from '@react-google-maps/api';

const root = ReactDOM.createRoot(document.getElementById('root'));

const containerStyle ={
  width: '1400px',
  height: '1400px'
}

const center = {
  lat: 6.1554,
  lng: -75.3733
}


const Mapa = ()=>{ 
  return (
    <LoadScript googleMapsApiKey='AIzaSyCWSda7b7myI0pdV7jcd_cBwK15y-8_-lY'>
    <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={10}
    />
    </LoadScript>
  )
}

root.render (Mapa) 

export default Mapa