import React from "react";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from "./footer";

test('Verificar si el texto esta correctamente escrito', () =>{
    const texto = 'Somos expertos en la creación de tus sueños';

    const { getByText } = render(<Footer />);

    expect (getByText(texto)).toBeInTheDocument();
});