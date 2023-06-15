import React from "react";
import {render} from '@testing-library/react';
import Ventas from "./ventas";

test('El componente de ventas se renderiza correctamente', () =>{
    render(<Ventas/>)
});