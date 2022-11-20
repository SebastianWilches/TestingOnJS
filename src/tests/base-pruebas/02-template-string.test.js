import { getSaludo } from "../../base-pruebas/02-template-string"

describe('Pruebas en el archivo 02-template-string', () => { 
    
    test('getSaludo deberia retornar: Hola Sebastian', () => { 
        //1. Arrange
        const name = "Sebastian";

        //2. Act
        const mensaje = getSaludo(name);

        //3. Affirm
        expect(mensaje).toBe(`Hola ${name}`);
     })
    
 })