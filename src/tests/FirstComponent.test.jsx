import { render } from '@testing-library/react'
import { FirstComponent } from "../FirstComponent"

describe('Pruebas en el componente <FirstComponent/>', () => {

    test('Debe hacer match con el snapshot', () => {
        //Arrange
        const title = 'Titulo de la app';
        const parrafo = 'LoremIpsum';
        const suma = 12;
        //Act
        const { container } = render(<FirstComponent titulo={title} parrafo={parrafo} suma={suma} />);

        //Affirm
        expect(container).toMatchSnapshot();

    })

    test('El H1 debería mostrar información del titulo', () => { 
        //A
        const title = 'Titulo de la app';

        //A
        const { container, getByText } = render(<FirstComponent titulo={title}/>);

        //A
        expect(getByText(title)).toBeTruthy(); //Evaluamos que el texto este en el DOM

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title); //Miramos que un elemento h1 tenga el titulo

     })

})