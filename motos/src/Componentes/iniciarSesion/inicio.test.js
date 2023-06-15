import React from "react";
import {render, screen} from '@testing-library/react';
import Inicio from "./inicio";

/*test ('Verificar boton desabilitado', () => {
    render(<Inicio></Inicio>)

    const button = screen.getByTestId('boton');
    expect(button).toBeDisabled();
})*/

test ('Verificar campo obligatorio, contraseña', () => {
    render(<Inicio/>)

    const required = screen.getByTestId('nombre');
    expect(required).toBeRequired();
})