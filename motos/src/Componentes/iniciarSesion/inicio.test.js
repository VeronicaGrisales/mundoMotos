import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Inicio from "./inicio";

test ('Verificar campo obligatorio, contraseña', () => {
    render(<Inicio></Inicio>)

    const required = screen.getByTestId('nombre');
    expect(required).toHaveAttribute('required');
})