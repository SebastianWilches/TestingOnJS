import { render } from '@testing-library/react'
import { FirstComponent } from "../FirstComponent"

describe('Pruebas en el componente <FirstComponent/>', () => {

    // test('Debe hacer match con el snapshot', () => {
    //     //Arrange
    //     const title = 'Titulo de la app';
    //     const parrafo = 'LoremIpsum';
    //     const suma = 12;
    //     //Act
    //     const { container } = render(<FirstComponent titulo={title} parrafo={parrafo} suma={suma} />);

    //     //Affirm
    //     expect(container).toMatchSnapshot();

    // })


    test('El H1 debería mostrar información del titulo', () => { 
        //A
        const title = 'Titulo de la app';

        //A
        const { container, getByText, getByTestId } = render(<FirstComponent titulo={title}/>);

        //A
        expect(getByTestId('test-title').innerHTML).toContain(title); //Evaluamos que el texto este en el DOM

     })

     test('Debe contener el parrafo enviado por props 3 veces', () => { 
        
        const title = 'Titulo de la app';
        const parrafo = 'Lorem del parrafo'
        const { getAllByText } = render(
            <FirstComponent
                titulo={title}
                parrafo = {parrafo}
            />);

  
        expect(getAllByText(parrafo).length).toBe(3);
      })

})