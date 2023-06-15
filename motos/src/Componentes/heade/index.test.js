import React from "react";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Index from '../heade/index'

test('Verificar el texto que acompaña a la api', () => { 
    const texto = 'Aca te compartimos nuestra ubicacion hacia nuestro local fisico';

    const { getByText }  = render(<Index />);

   expect (getByText(texto)).toBeInTheDocument();

 })