import { render, screen, fireEvent } from '@testing-library/react'
import CounterApp from '../CounterApp'

describe('Pruebas en el componente <CounterApp/>', () => {
    const value = 100;

    test('Debería hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={value} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el contador el valor inicial de 100', () => {
        render(<CounterApp value={value} />);
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe(value.toString());
    })

    test('Debe aumentar el valor en +1 al darle click al botón', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1')) //Esta sentencia le da click a el botón
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe(`${value + 1}`);
    })

    test('Debe disminuir el valor en -1 al darle click al botón', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe(`${value - 1}`);
    })

    test('Debe funcionar el botón de reset', () => {
        render(<CounterApp value={value} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button', {name: 'button-reset'})); 

        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe(`${value}`)

    })
})