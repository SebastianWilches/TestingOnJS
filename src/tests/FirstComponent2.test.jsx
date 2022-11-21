import { render, screen } from '@testing-library/react'
import { FirstComponent } from "../FirstComponent"

describe('Pruebas en el componente <FirstComponent/>', () => {
    //Refactorización de las pruebas

    //Variables generales
    const title = 'Titulo de la app';
    const parrafo = 'Lorem del parrafo';

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<FirstComponent titulo={title} parrafo={parrafo} />);
        expect(container).toMatchSnapshot();

    })

    test('El componente deberia contener el titulo "Titulo de la app"', () => {

        render(<FirstComponent titulo={title} parrafo={parrafo} />);
        expect(screen.getByText(title)).toBeTruthy();

    })

    test('El H1 debería mostrar información del titulo', () => {

        render(<FirstComponent titulo={title} parrafo={parrafo} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);

    })

    test('Debe contener el subtitulo enviado por props 3 veces', () => { 
        
        render(<FirstComponent titulo={title} parrafo={parrafo} />);
        expect(screen.getAllByText(parrafo).length).toBe(3);

     })
})