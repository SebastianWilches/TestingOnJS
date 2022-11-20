import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Pruebas en el archivo 07-deses-arr', () => {

    test('Deberia retornar un array con un string y un número', () => { 
        
        
        const [letras, numeros] = retornaArreglo();        
        //Affirm

        //Comparando con contenido litera
        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);

        //Comparando con tipo de dato
        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');

     })
})