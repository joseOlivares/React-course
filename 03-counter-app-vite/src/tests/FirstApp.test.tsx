import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en <FirstApp />', () => {
    test('debe de hacer match con el snapshot', () => {
        const title= 'Hola, soy Goku';
        const subtitle = 'Soy un subtitulo';
        const name= 'José Olivares';
        const  {container} = render(<FirstApp title={title} subtitle={subtitle} name={name}/>);

       // expect(container).toMatchSnapshot(); // crea un snapshot del componente
        

    });

    test('debe de mostrar el titulo en un h1', () => {
        const title= 'Hola, soy Goku';
        const subtitle = 'Soy un subtitulo';
        const name= 'José Olivares';
        const  {container} = render(<FirstApp title={title} subtitle={subtitle} name={name}/>);
        expect(container.querySelector('h1')?.innerHTML).toBe(title);
    })
    
})