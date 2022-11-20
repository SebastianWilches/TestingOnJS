import { render } from '@testing-library/react'
import { FirstComponent } from "../FirstComponent"

describe('Pruebas en el componente <FirstComponent/>', () => {

    test('Debe hacer match con el snapshot', () => {
        //Arrange
        const title = 'Titulo de la app';
        const parrafo = 'LoremIpsum';
        const suma = 12;
        render(<FirstComponent titulo={title} parrafo={parrafo} suma={suma} />);

    })

})