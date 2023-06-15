import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Registro from '../segundoComponente/registrarse'

test ('Verificar boton desabilitado', () => {
    render(<Registro></Registro>)

    const button = screen.getByTestId('boton');
    expect(button).toBeDisabled();
})