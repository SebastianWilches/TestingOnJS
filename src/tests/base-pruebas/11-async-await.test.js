import { getImagen } from '../../base-pruebas/11-async-await';

describe('Pruebas en el archivo 11-async-await', () => { 
    test('Deberia retornar la url del gif', async() => { 

        const url = await getImagen();
        expect(typeof url).toBe('string');

     })
 })