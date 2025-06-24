import { screen, render, fireEvent } from "@testing-library/react";
import { CounterApp } from "../components/counterApp/counterApp";

describe('Testing CounterApp', () => {



    test('debe de hacer match con el snapshot', () => {
        const value = 10;
        const {container} = render(<CounterApp value={value}/>);
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar el valor inicial de 100', () => {
        const value = 100;
      render(<CounterApp value={value}/>);
        expect(screen.getByText(value)).toBeTruthy();
    })

    test('debe de incrementar con el boton +1', () => {
        const value = 10;
        render(<CounterApp value={value}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    })
    
})