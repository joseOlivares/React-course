import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en <FirstApp />', () => {
    const title= 'Hola, soy Goku';
    const subtitle = 'Soy un subtitulo';
    const name= 'José Olivares';

    test('Debe de hacer match con el snapshot', () => {

        const  {container} = render(<FirstApp title={title} subtitle={subtitle} name={name}/>);
        expect(container).toMatchSnapshot();

    })

    test('Debe mostrar el mensaje Hola, Soy Gokú', () => {   

        render(<FirstApp title={title} subtitle={subtitle} name={name}/>);
        expect(screen.getByText(title)).toBeTruthy();        

    })

    test('Debe mostrar el titulo en un h1', () => {
        render(<FirstApp title={title} subtitle={subtitle} name={name}/>);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toBe(title);
    })

    test('Debe mostrar el subtitulo enviado por props', () => {
        render(<FirstApp title={title} subtitle={subtitle} name={name}/>);
        expect(screen.getAllByText(subtitle).length).toBe(2);
    })

});