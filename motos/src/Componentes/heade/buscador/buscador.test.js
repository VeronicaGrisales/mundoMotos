import React from "react";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Buscar from '../buscador/buscador'

test('Verificar texto en un boton', () => { 
    const texto = 'Aceptar';

    const { getByText }  = render(<Buscar />);

    expect (getByText(texto)).toBeInTheDocument();

 })